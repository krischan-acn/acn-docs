---
reviewed: 2026-10-23
---

# Decisions

Why the software is the way it is. Read before "fixing" any of these ([Chesterton's fence](/start/principles#chesterton-s-fence)). Newest first. Client-level decisions live in the knowledge base's `decisions/` folder.

To add one: copy the shape below, newest at the top, and date it. Don't delete old decisions; mark them **replaced** and link the new one.

---

### 2026-10-23 · Docs live in their own repo and site

**Decision.** Long-form documentation lives in `acn-docs`, published with VitePress on Cloudflare Workers, public but excluded from search engines. Code repos keep only `README.md`, `AGENTS.md`/`CLAUDE.md` and code-coupled files.
**Why.** Keep the code repos lean; give staff and Claude one place to read; `llms.txt` makes it easy for AI tools to read. Public, because a password would also lock Claude out.
**Instead of.** Docs inside each code repo (bloat), or in the knowledge base (that's the client map, not the plumbing).

### 2026-10-23 · Newsroom stays on Netlify and Vercel; Cloudflare Workers shelved

**Decision.** The newsroom is not moving to Cloudflare. The `cloudflare` branch (OpenNext adapter, R2 cache, Durable Object queue, Next 16.4) stays unmerged.
**Why.** The aim was "connect and forget" hosting. Keeping ISR on Workers needs an explicit cache store and queue, which is ongoing infrastructure to own. Netlify and Vercel do it for us.
**Revisit if.** Netlify and Vercel costs or limits become a problem, or OpenNext's Cloudflare setup becomes zero-config.

### Ongoing · The newsroom is hosted twice

**Decision.** Netlify (from `krischan-acn/newsroom`) and Vercel (from `s-ging/newsroom`), same code, pushed together via the `all` remote.
**Why.** Redundancy. One host's outage or bad build doesn't take the newsroom down.

### 2026-10 · The admin reaches the API through a `/wire` proxy

**Decision.** The browser calls `/wire/*` on the admin's own origin; Vite (dev) and `vercel.json` (prod) forward it to the API.
**Why.** The API's CORS policy is an allowlist that blocks every deployed origin. Same-origin requests never trigger CORS.
**Don't.** Set `VITE_API_BASE_URL` to the API's address.

### 2026-10-13 · Admin edits are drafts; commit sends, re-reads and verifies

**Decision.** Every edit autosaves to a local draft. Commit diffs draft against the last API copy, sends, then re-fetches to confirm. Anything that didn't land, or has no endpoint, stays as a draft, labelled.
**Why.** The API lacks endpoints for many fields and goes down at times. Nobody should lose work, or believe something saved when it didn't.

### 2026-10-22 · Newsroom article URLs: transliterated slugs, no canonical redirect

**Decision.** `/article/<language>/<id>/<latin-slug>`. The route resolves by ID only; the canonical URL is a `<link rel=canonical>`, not a redirect.
**Why.** Readable links in emails and chats for CJK clients, instead of percent-encoded characters. A redirect on an ISR route gets baked in as a 200 with a meta refresh.

### 2026-09-16 · Newsroom component tiers and house style

**Decision.** Components sit in `common/`, `shared/` or `features/<area>/`, with one-way imports. Headings are weightless; buttons use `.button`; there is one accent colour.
**Why.** The tree had become tangled and the styling generic. Rules live in the newsroom's `BIBLE.md`.

### 2026-08-27 · Sector is the broad level, industry the narrow one

**Decision.** Use "sector" for the 9 broad groups and "industry" for the 76 narrow ones, everywhere new, through `taxonomy.ts`.
**Why.** That's how staff and the newsroom's menus talk. The old database names are one level off (`sector_type` is the sector, `sector_name` the industry).
