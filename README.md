# ACN Docs

Documentation for ACN Newswire's **newsroom** (the public press release site) and **admin** (the internal editing tool): how they're set up, how to use them, how to keep them running.

Published with [VitePress](https://vitepress.dev) on Cloudflare Workers. Every push to `main` deploys.

```bash
npm install
npm run dev     # preview at http://localhost:5173
npm run gen     # rebuild docs/reference/generated/ from the newsroom and admin code
npm run build   # what Cloudflare runs
```

- Pages are Markdown in [`docs/`](docs/). The sidebar is in [`docs/.vitepress/config.mts`](docs/.vitepress/config.mts).
- How to write here: [docs/build/docs-site.md](docs/build/docs-site.md).
- Start reading: [docs/start/map.md](docs/start/map.md).

This site is **public** (hidden from search engines). Never commit passwords, tokens, keys or anything describing a security weakness.
