---
reviewed: 2026-10-23
---

# The admin won't save

First: **your edits are almost certainly safe.** The admin keeps them in your browser until they've reached the newswire and been checked. The one exception is "storage is full", below.

## Find your message

| Message | Go to |
| --- | --- |
| Nothing was sent: the API could not be reached | [Can't reach the newswire](#can-t-reach-the-newswire) |
| Nothing was sent: the API refused the request | [Refused](#refused) |
| N changes did not show up in the API after saving | [Didn't land](#didn-t-land) |
| A row in the commit window says **local only** | [Local only](#local-only) |
| Browser storage is full | [Storage full](#storage-full) |
| A listing or country code is refused | [Listings refused](#listings-refused) |

## Can't reach the newswire

The newswire is down, or your connection is. Keep working; commit later. See [the API is down](/runbooks/api-down).

**Developers:** in the browser console this can look like a CORS error even when the real cause is the API's VM being off (Cloudflare 522). Run `npm run validate -- --url <admin address>` to tell them apart.

## Refused

The newswire said no (401 or 403), usually a permissions change on the API side. Tell a developer.

**Developers:** writes send `Authorization: Bearer $VITE_API_TOKEN` when the variable is set. A `VITE_` variable is baked into the public JavaScript, so never use a real token in a deployed build. A proper login flow is an open question with the API team.

## Didn't land

The newswire accepted the request, but when the admin read the record back, the change wasn't there. Your change stays as a draft. Try once more; if it repeats, tell a developer which company and which field.

## Local only

Not an error. The newswire has no place to store that field yet. It stays in your draft and doesn't block the rest. The full list is in [how saving works](/guide/admin#what-saves-for-real-and-what-doesn-t-yet).

## Storage full

Your browser has run out of room for drafts, about 5 MB. Images pasted into press releases are the usual cause; they're stored inside the draft.

1. Commit any company drafts you can.
2. Remove large images from press release drafts, or discard drafts you don't need.
3. Don't clear all browser data. That deletes every uncommitted draft.

## Listings refused

The newswire's exchange and country tables are empty on its side, so it refuses every exchange code and country code. A fix (`docs/seed/` in the admin repo) was sent to the API team on 2026-10-19. Until it's applied, listings stay in your draft.
