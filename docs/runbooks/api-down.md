# The API is down

## What you'll see

- **Admin:** "*Could not reach the newswire API — showing the last synced copy*", the status line saying **Offline** or **Cached**, or "*Nothing was sent: the API could not be reached*" when committing.
- **Newsroom:** mostly nothing at first. Pages already visited keep showing their saved copy. New pages, or pages whose copy is older than an hour, may show an error or empty sections.

## Check

Open in a browser:

```
https://development.acnnewswire.com/api/Articles?Page=1&Size=1
```

| You get | Meaning |
| --- | --- |
| Text starting with `[{"` | The API is up. The problem is elsewhere. |
| A Cloudflare page with **522** or **504** | The API's machine on Azure is off or not answering. |
| **500** | The API is running but failing. |
| Nothing loads at all | Network or DNS. Try another connection. |

## What to do

**Anyone:**
1. **Don't panic about lost work.** Admin drafts are safe in your browser. Keep working; commit later.
2. Tell the developers and the API team that the API is down, and since when.

**Developer / API team:**
1. Check the Azure VM is running (Azure portal). Restart the API's app if needed.
2. Once it's back, run the check above again.
3. Check the newsroom homepage. If it's blank, follow [homepage is blank](/runbooks/blank-homepage).
4. To check the admin's path end to end: `npm run validate -- --url <admin address>` in the admin repo.

## Working while it's down

- Admin developers can run `npm run dev:mock`, a local fake API with realistic data.
- Newsroom article pages keep serving their last good copy. Only first-time visits fail.
