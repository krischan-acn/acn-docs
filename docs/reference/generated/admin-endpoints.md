---
generated: 2026-10-21T20:58:22+08:00
source: admin origin/feat/api-write-wiring@0cf20c7
---

# Admin: API endpoints called

> Built from the code by `npm run gen`. Don't edit by hand: change the code and it updates overnight.

Every ACN API path in the admin source. In the browser these are all requested through the `/wire` proxy, never directly.

### Hosts referenced

- `https://development.acnnewswire.com`: [src/lib/api/client.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/client.ts), [src/lib/api/index.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/index.ts)
- `https://photos.acnnewswire.com`: [src/lib/api/media.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/media.ts)
- `https://www.acnnewswire.com`: [src/components/company/tabs/DistributionTab.tsx](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/components/company/tabs/DistributionTab.tsx), [src/dev/seed.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/dev/seed.ts), [src/lib/api/media.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/media.ts)

### Paths

| Path | Called from |
| --- | --- |
| `/api/Articles` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Articles/by-company/{…}` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Articles/by-industry` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Articles/homepage` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Articles/press-release/{…}` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Articles/search` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Companies` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Companies/{…}` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts)<br>[src/lib/api/map-company.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/map-company.ts)<br>[src/lib/api/repository.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/repository.ts) |
| `/api/Companies/{…}/details` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Companies/{…}/full` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts)<br>[src/lib/api/repository.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/repository.ts) |
| `/api/Companies/{…}/industries/{…}` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Companies/{…}/listings` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Companies/{…}/listings/{…}` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Companies/{…}/social-links/{…}` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/CompContacts` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts)<br>[src/lib/api/map-company.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/map-company.ts)<br>[src/lib/api/repository.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/repository.ts) |
| `/api/Events` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Events/{…}` | [src/hooks/useRecords.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/hooks/useRecords.ts)<br>[src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts)<br>[src/lib/api/repository.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/repository.ts) |
| `/api/Events/{…}/full` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Events/company/{…}/year/{…}` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Events/full` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
| `/api/Sectors` | [src/lib/api/endpoints.ts](https://github.com/s-ging/acn-admin/blob/0cf20c7/src/lib/api/endpoints.ts) |
