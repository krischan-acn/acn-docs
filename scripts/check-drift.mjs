// Finds hand-written docs pages that may no longer match the code.
//
// For every page outside docs/reference/generated/ it:
//   1. requires a `reviewed: YYYY-MM-DD` date in the frontmatter;
//   2. finds every code file, folder and env var the page mentions in `backticks`;
//   3. flags references that no longer exist in the newsroom, admin or this repo;
//   4. flags pages whose referenced files have changed since the page was reviewed.
//
// It never fails the build; it writes a report. In CI the report becomes one
// GitHub issue labelled docs-drift (see .github/workflows/sync.yml).
//
//   npm run check                       # print the report
//   npm run check -- --out drift.md     # also write it to a file

import { execFileSync } from 'node:child_process'
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { resolve, dirname, relative, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const docsDir = resolve(root, 'docs')
const outArg = process.argv.indexOf('--out')
const outFile = outArg > -1 ? process.argv[outArg + 1] : null

const repos = [
  { name: 'newsroom', dir: resolve(root, process.env.NEWSROOM_DIR ?? '../newsroom-main'), ref: process.env.NEWSROOM_REF ?? 'origin/main' },
  { name: 'admin', dir: resolve(root, process.env.ADMIN_DIR ?? '../acn-admin'), ref: process.env.ADMIN_REF ?? 'origin/feat/api-write-wiring' },
  { name: 'acn-docs', dir: root, ref: 'HEAD' },
]

const git = (repo, ...args) =>
  execFileSync('git', ['-C', repo.dir, ...args], { encoding: 'utf8', maxBuffer: 64 << 20 }).trim()

for (const r of repos) {
  r.files = git(r, 'ls-tree', '-r', '--name-only', r.ref).split('\n')
  r.env = new Set(r.files
    .filter((f) => /\.(ts|tsx|js|mjs)$/.test(f) && !f.includes('node_modules'))
    .flatMap((f) => {
      try { return [...git(r, 'show', `${r.ref}:${f}`).matchAll(/(?:process\.env|import\.meta\.env)\.([A-Z0-9_]+)|\b([A-Z][A-Z0-9_]{3,})\s*[:=]/g)].map((m) => m[1] ?? m[2]) }
      catch { return [] }
    }))
}

// Env var names the docs mention, recognised by prefix so ordinary
// CONSTANT_NAMES aren't mistaken for settings.
const ENV_PREFIX = /^(NEXT_PUBLIC_|VITE_|AB_|UPSTASH_|WIRE_|MOCK_|USE_MOCK|NEWSROOM_|ADMIN_)[A-Z0-9_]*[A-Z0-9]$/

// Inline code that looks like a path but isn't one of ours: GitHub repos,
// branches, npm packages, web addresses, build output, sibling folders.
const NOT_A_PATH = /^(krischan-acn|s-ging|feat|fix)\/|^@|^\.\.\/|^\.next\/|\.(com|app|dev)(\/|$)/

// Mentioned on purpose although the code doesn't have them. Each needs a reason.
const KNOWN_ABSENT = new Set([
  'NEXT_PUBLIC_API_BASE_URL', // documented as "read by no code"; the docs warn about it
  'decisions/',               // the knowledge base's folder, not a code repo's
])

/** Finds a referenced path in a repo; partial paths like `tabs/BasicInfoTab.tsx` match by suffix. */
function locate(ref) {
  const clean = ref.replace(/^\.\//, '').replace(/[:#].*$/, '')
  for (const r of repos) {
    // A folder, written with or without the trailing slash.
    const asDir = clean.endsWith('/') ? clean : clean + '/'
    if (r.files.some((f) => f.startsWith(asDir) || f.includes('/' + asDir))) return { repo: r, path: asDir }
    if (clean.endsWith('/')) {
      if (r.files.some((f) => f.startsWith(clean) || f.includes('/' + clean))) return { repo: r, path: clean }
    } else {
      const hit = r.files.find((f) => f === clean || f.endsWith('/' + clean))
      if (hit) return { repo: r, path: hit }
    }
  }
  return null
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    if (name.startsWith('.') || name === 'public') return []
    if (statSync(p).isDirectory()) return name === 'generated' ? [] : walk(p)
    return p.endsWith('.md') ? [p] : []
  })
}

const problems = { missingDate: [], missing: [], stale: [] }

for (const file of walk(docsDir)) {
  const page = relative(root, file).replace(/\\/g, '/')
  const text = readFileSync(file, 'utf8')
  const reviewed = text.match(/^---[\s\S]*?^reviewed:\s*(\d{4}-\d{2}-\d{2})/m)?.[1]
  if (!reviewed) problems.missingDate.push(page)

  // Code blocks show commands, not references, so only scan inline code.
  const prose = text.replace(/```[\s\S]*?```/g, '')
  const refs = new Set([...prose.matchAll(/`([^`\s]+)`/g)].map((m) => m[1]))
  const changed = []

  for (const ref of refs) {
    if (/[<>…*{}$|]|^https?:|^\/|^--|^npm|^git /.test(ref) || NOT_A_PATH.test(ref) || KNOWN_ABSENT.has(ref)) continue
    if (ENV_PREFIX.test(ref)) {
      if (!repos.some((r) => r.env.has(ref))) problems.missing.push({ page, ref, kind: 'setting' })
      continue
    }
    // A file or folder: has a slash, or is a known root file name.
    const looksLikePath = /^[\w.@-]+(\/[\w.@\[\]-]*)+$/.test(ref) || /^[\w.-]+\.(json|jsonc|ts|mts|mjs|md|toon|css)$/.test(ref)
    if (!looksLikePath) continue
    const found = locate(ref)
    if (!found) { problems.missing.push({ page, ref, kind: 'file' }); continue }
    if (reviewed && found.repo.name !== 'acn-docs') {
      const commits = git(found.repo, 'log', '--format=%h %cs %s', `--after=${reviewed}T23:59:59`, found.repo.ref, '--', found.path)
      if (commits) changed.push({ ref, repo: found.repo.name, commits: commits.split('\n') })
    }
  }
  if (changed.length) problems.stale.push({ page, reviewed, changed })
}

// ── Report ───────────────────────────────────────────────────────────────

const lines = []
const total = problems.missingDate.length + problems.missing.length + problems.stale.length
lines.push(total
  ? `Found **${total}** thing${total === 1 ? '' : 's'} to look at. Newsroom \`${repos[0].ref}\`, admin \`${repos[1].ref}\`.\n`
  : 'Docs and code agree. Nothing to do.\n')

if (problems.stale.length) {
  lines.push('## Pages whose code changed since they were reviewed\n')
  lines.push('Read the page against the commits listed. Fix it if needed, then set its `reviewed:` date to today.\n')
  for (const s of problems.stale) {
    lines.push(`### \`${s.page}\` (reviewed ${s.reviewed})\n`)
    for (const c of s.changed) {
      lines.push(`- \`${c.ref}\` in ${c.repo}, ${c.commits.length} commit${c.commits.length === 1 ? '' : 's'}:`)
      for (const line of c.commits.slice(0, 5)) lines.push(`  - ${line}`)
      if (c.commits.length > 5) lines.push(`  - …and ${c.commits.length - 5} more`)
    }
    lines.push('')
  }
}
if (problems.missing.length) {
  lines.push('## References that no longer exist in the code\n')
  lines.push('| Page | Mentions | Kind |\n| --- | --- | --- |')
  for (const m of problems.missing) lines.push(`| \`${m.page}\` | \`${m.ref}\` | ${m.kind} |`)
  lines.push('')
}
if (problems.missingDate.length) {
  lines.push('## Pages without a `reviewed:` date\n')
  for (const p of problems.missingDate) lines.push(`- \`${p}\``)
  lines.push('')
}

const report = lines.join('\n')
console.log(report)
if (outFile) writeFileSync(outFile, report)
