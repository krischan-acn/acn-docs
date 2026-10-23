# Set up

For developers, from a blank machine to all three projects running locally. Read [how we work](/start/principles) before changing anything.

## What you need

- **Node.js 24** and npm.
- **Git**, with access to the GitHub repositories below. Ask Krischan for an invite.
- Optionally, **Claude Code**. Each repo has an `AGENTS.md` / `CLAUDE.md` that it reads on start.

## The repositories

| Repo | What | Deploys to |
| --- | --- | --- |
| `krischan-acn/newsroom` and `s-ging/newsroom` | The newsroom, Next.js. Two GitHub copies of the same code; see [hosting](/build/hosting). | Netlify and Vercel |
| `s-ging/acn-admin` | The admin, Vite + React | Vercel |
| `krischan-acn/acn-docs` | This site | Cloudflare Workers |
| `krischan-acn/ACN-knowledge-base` | Top-level client notes, decisions, status | Not deployed |

Clone them side by side. This site's generator expects that layout:

```
acn-newswire-admin/
  newsroom-main/
  acn-admin/
  acn-docs/
  ACN-knowledge-base/
```

## Newsroom

```bash
git clone https://github.com/s-ging/newsroom.git newsroom-main
cd newsroom-main
git remote add acn https://github.com/krischan-acn/newsroom.git
# one remote that pushes to both copies at once:
git remote add all https://github.com/s-ging/newsroom.git
git remote set-url --add --push all https://github.com/s-ging/newsroom.git
git remote set-url --add --push all https://github.com/krischan-acn/newsroom.git
git config core.hooksPath .githooks   # keeps COMPONENTS.toon current on commit
npm install
npm run dev                           # http://localhost:3000
```

It needs no settings to run: it reads the live ACN API. Only design voting needs variables; see [newsroom env vars](/reference/generated/newsroom-env).

**Before you say you're done:** `npx tsc --noEmit` and `npm run build` must both pass. `npm run lint` is broken and has been for a while; ignore it.

## Admin

```bash
git clone https://github.com/s-ging/acn-admin.git
cd acn-admin
npm install
npm run dev          # http://localhost:5173, talks to the real API through /wire
npm run dev:mock     # same, against a local fake API. Use this when the real one is down.
npm test             # Vitest, about 380 tests
```

Leave `VITE_API_BASE_URL` unset. Setting it to the API's address breaks things; [the admin page](/build/admin#the-wire-proxy) explains why.

**Before you say you're done:** `npm run build` (type-checks too) and `npm test`.

## This docs site

```bash
git clone https://github.com/krischan-acn/acn-docs.git
cd acn-docs
npm install
npm run dev          # http://localhost:5173
npm run gen          # rebuild the reference pages from the code
```

More in [this docs site](/build/docs-site).
