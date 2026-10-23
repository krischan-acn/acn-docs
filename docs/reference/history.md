---
reviewed: 2026-10-23
---

# History

What happened to the software, newest first. One line per event; link to more if there is more. Never rewrite an old entry; add a new one.

| Date | What |
| --- | --- |
| 2026-10-23 | Docs site created (`acn-docs`). Newsroom `staging` promoted to `main` and deployed to both hosts: events page, component refactor, article caching, cleaner slugs, lighter homepage. |
| 2026-10-22 | Newsroom tried on Cloudflare Workers via OpenNext; shelved on the `cloudflare` branch. |
| 2026-10-22 | Newsroom slugs cleaned up: Hepburn for Japanese kana, whole-word cuts, transliteration kept server-side. |
| 2026-10-22 | Newsroom article pages cached (ISR): repeat views 15–30 ms, down from 2.5–8 s. Canonical redirect dropped. |
| 2026-10-22 | Newsroom homepage lightened: 45 KB → 16 KB over the network, 15 → 2 image preloads. |
| 2026-10-19 | Seed script for the API's empty Exchanges and Countries tables sent to the API team. |
| 2026-10-13 | Admin: API writes for companies and events; the draft → commit → verify save model. |
| 2026-09-23 | Newsroom moved onto the API's `/full` routes for events and companies. API stopped sending portal credentials in company responses. |
| 2026-09-16 | Newsroom component refactor (tiers) and house style written down (`BIBLE.md`, `STYLING.toon`). |
| 2026-09 | Old website: homepage slowness and app-pool outages traced and fixed. |
| 2026-08-27 | The old enrichment API (`www.acnnewswire.com/acnnewswireapi`) starts returning 503; still down. |
| 2026-08 | Newsroom moved to the new API at development.acnnewswire.com. Legacy database exported and analysed. |
