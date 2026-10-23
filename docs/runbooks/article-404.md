---
reviewed: 2026-10-23
---

# A press release won't open

## Check the number

Every release address contains its number: `/article/japanese/`**`108773`**`/…`. Only the number matters, so try the short form:

```
https://portal.acnnewswire.com/article/108773
```

| What you get | Meaning | What to do |
| --- | --- | --- |
| The release opens | The long address had a problem, or it was a one-off | Use the short form when sharing |
| **"Not found"** | The newswire says there's no published release with that number | Check the number. Is the release published? Scheduled ones don't show until their time. |
| **An error page with "Try again"** | The newswire didn't answer in time | See [the API is down](/runbooks/api-down) |
| Opens on one newsroom copy but not the other | That host has an older version, or a stale saved copy | Check both hosts are on the same deploy |

## Old website links

Links from the old site look like `www.jcnnewswire.com/pressrelease/105535/3/`. The newsroom doesn't redirect these yet. Take the number (`105535`) and use `/article/105535`.

## For developers

- The route is `src/app/article/[...segments]/page.tsx` and resolves the ID with `extractId`.
- A real API 404 gives `notFound()`. Any other error is rethrown, so ISR keeps the last good copy, but a **first** visit during an outage shows `error.tsx`.
- **Renders locally, 404s deployed:** your local `.next/cache/fetch-cache` has an old response the deployed build doesn't. Clear it (`rm -rf .next/cache`) and try again locally.
