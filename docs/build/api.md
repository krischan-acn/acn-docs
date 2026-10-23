---
reviewed: 2026-10-23
---

# The ACN API

The newsroom and the admin both read from `https://development.acnnewswire.com`. Despite the name, it is the production data source. It's a .NET / EF Core service over SQL Server on an Azure VM, built and run by a separate API team. Its code is not in our repositories.

- Swagger: `https://development.acnnewswire.com/swagger/index.html`
- Volumes (October 2026): about 9,600 companies, 80,600 press releases, 839 events (816 published).

## What each app calls

Generated from the code: [newsroom API calls](/reference/generated/newsroom-endpoints) · [admin API calls](/reference/generated/admin-endpoints).

The routes that matter most:

| Route | Used for |
| --- | --- |
| `GET /api/Articles?Page=&Size=` | Paged press release list (Size max 100) |
| `GET /api/Articles/press-release/{id}` | One press release |
| `GET /api/Articles/by-company/{id}` | A company's releases |
| `GET /api/Articles/by-industry?industry=` | Releases in one **sector** (it takes the 9 sector names, despite the parameter name) |
| `GET /api/Companies/{id}/full` | A company with everything attached |
| `GET /api/Events/full` | All published events in one call |
| `GET /api/Events/{id}/full` | One event |

## Quirks to design around

- **No totals.** Lists are bare arrays: no envelope, no count header. Page until a short page comes back.
- **Inconsistent parameters:** `Page`/`Size`, `pageNumber`/`pageSize` and `PageNumber`/`PageSize` all exist.
- `Size` above 100 returns **400**.
- `/api/Events/{id}` always returns **500**. Use `/api/Events/{id}/full`.
- `/full` routes return **published records only**.
- `/api/Articles/homepage` returns `[]`. `/api/Articles/search` has no keyword parameter.
- `/api/Articles?Cid=` is **not** a company filter; `SecId` and `ArtType` are silently ignored.
- Empty values come as `null`, `""` or `" "`. Field casing varies.
- Dates have **no time-zone offset**. Treat them as Singapore/Hong Kong time (+08:00).
- **CORS is an allowlist.** Browsers on deployed origins are blocked, which is why the admin uses the `/wire` proxy and the newsroom fetches on the server.
- **The VM can be off.** Cloudflare then answers 522, which in a browser console looks just like a CORS error.
- `/api/Sectors` ids don't match ACN's own sector ids; match by name.

## The old enrichment API

The newsroom also asks the legacy `www.acnnewswire.com/acnnewswireapi/…/GetArticleById` for language, supplier and views, with a 2-second timeout. It has returned 503 since 2026-08-27, so those fields fall back to defaults.

## Asking the API team for changes

Write a short request: why we need it, the exact endpoint and response, the rules, and acceptance checks with real IDs. Keep a copy in the requesting app's repo under `docs/`.
