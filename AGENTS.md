# AGENTS.md: acn-docs

You are working in ACN Newswire's documentation site. It covers two codebases, the **newsroom** (`newsroom` repos, Next.js) and the **admin** (`acn-admin`, Vite + React), for two audiences: ACN staff who are not developers, and future developers.

## Principles

Synced from the ACN knowledge base `PRINCIPLES.md` on 2026-10-23. If they disagree, the knowledge base wins.

- **Chesterton's fence.** Don't remove or rewrite something until you know why it's there. Check `docs/reference/decisions.md` and git history, then ask.
- **Pareto.** Do the high-leverage part first.
- **Jakob's law.** Familiar beats clever, for readers and for these docs.
- **Two modes.** Drafting docs here is brainstorm mode: start right away. Anything touching code, a live site, DNS or accounts is work mode: restate the request, list what's out of scope, ask at least three questions, and wait for a yes.
- **Nothing goes live without approval** for that exact change.

## Hard rules for this repo

1. **The site is public.** Never write passwords, tokens, keys or env values; write the variable's name and where it's set. Also never write anything that helps an attacker, such as unprotected endpoints, missing logins, or the admin's address. Those go in the private knowledge base.
2. **Speak staff language** on any page under `docs/guide/` or `docs/runbooks/`, and when answering staff: press release (not article), issuer, sector (9 broad), industry (76 narrow), exchange, listing. Explain technical terms in one plain sentence or avoid them. `docs/start/glossary.md` is the source; keep `llmsDetails` in `docs/.vitepress/config.mts` in step with it.
3. **Never hand-edit `docs/reference/generated/`.** Run `npm run gen` (it reads `../newsroom-main` and `../acn-admin` from git; see `docs/build/docs-site.md`).
4. **Mermaid:** use only `flowchart`, `sequenceDiagram`, `stateDiagram-v2`, `erDiagram` and `gantt`, so diagrams render on GitHub as well.
5. **Date facts that go stale** ("as of 2026-10-23"). Prefer linking a generated page over restating what it lists.
6. **New page means a sidebar entry** in `config.mts`, and a `reviewed: YYYY-MM-DD` frontmatter date. When you re-check a page against the code, bump its date.
7. **Commit as the machine's git identity.** Never invent an author from a first name.

## Before you say you're done

```bash
npm run build    # must pass; it fails on dead internal links
npm run check    # lists pages that may no longer match the code
```

Add a line to `docs/reference/history.md` if something happened to the software, and to `docs/reference/decisions.md` if a decision was made.

## Where things are

| Need | File |
| --- | --- |
| Overview of every system | `docs/start/map.md` |
| Words and their meanings | `docs/start/glossary.md` |
| Hosting, deploys, which repo feeds which host | `docs/build/hosting.md` |
| Newsroom / admin internals | `docs/build/newsroom.md`, `docs/build/admin.md` |
| API quirks | `docs/build/api.md` |
| Theme (house style) | `docs/.vitepress/theme/style.css` |
