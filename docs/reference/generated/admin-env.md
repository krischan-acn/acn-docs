---
generated: 2026-10-21T20:58:22+08:00
source: admin origin/feat/api-write-wiring@0cf20c7
---

# Admin: environment variables

> Built from the code by `npm run gen`. Don't edit by hand: change the code and it updates overnight.

Every variable the code reads. `VITE_*` values are baked into the browser bundle at build time, so anyone can read them; never put a secret in one.

| Variable | Read at |
| --- | --- |
| `DEV` | [src/dev/SeedButton.tsx:5](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/dev/SeedButton.tsx#L5) |
| `VITE_API_BASE_URL` | [src/lib/api/client.ts:69](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/client.ts#L69) |
| `VITE_API_TOKEN` | [src/lib/api/client.ts:120](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/client.ts#L120) |
