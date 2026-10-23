# Glossary

Three columns: what we say at ACN, what the code and the API call it, and what it actually means. If you are an AI reading this, **use the first column when talking to staff**.

## Newswire words

| We say | The code says | What it means |
| --- | --- | --- |
| **Press release** | `Article`, `article`, `artId`, `/api/Articles` | One announcement from a company. The code calls it an article everywhere; staff never do. |
| **Language version** | translation, `language` | The same press release in another language. A release often goes out in English, Simplified and Traditional Chinese, Japanese and Korean, each with its own number. |
| **Issuer**, **primary issuer** | `primary_issuer_id`, `companies[0]` | The company the release is from. A release can list several companies; one is the main one. The first company listed is sometimes the distributor (e.g. JCN Newswire), not the issuer. |
| **Sector** | `sector_type`, `SectorType`, "category" | The broad group: Business, Communications, Cryptocurrency, Financial, Industrial, Lifestyle, Medicine, Sustainability, Technology. There are 9. |
| **Industry** | `sector_name`, "sector" (in old code) | The narrower group inside a sector, e.g. Automotive inside Industrial. There are 76. Full list: [sectors and industries](/reference/generated/taxonomy). |
| **Exchange** | `MIC`, `exchange_code` | The stock exchange a company is listed on, written as a four-letter code: XTKS is Tokyo, XHKG is Hong Kong. |
| **Listing** | `listings`, `(mic, ticker)` | One exchange plus the company's ticker on it. A company can have several; the first is the primary listing. |
| **Ticker** | `ticker` | The company's short code on an exchange, e.g. 7011 for Mitsubishi Heavy Industries in Tokyo. |
| **Boilerplate**, **About** | `about_html`, `boilerplate` | The "About the company" paragraph printed at the bottom of every release. Stored on the company. |
| **Dateline** | `dateline` | The opening "TOKYO, August 14, 2026 –". The admin builds it from the location and date. |
| **Reuters / Bloomberg codes** | `reuters_codes`, `bloomberg_codes`, wire codes | Codes that route a release to the right channels on those terminals. |
| **Event** | `Event` | A trade show or conference ACN covers, e.g. BEX Asia. Can have press releases attached. |

## Software words, in plain English

| Word | What it means here |
| --- | --- |
| **API** | The service the newsroom and admin get their data from. Think of it as the counter at a records office: the apps ask, it fetches from the database and hands it over. |
| **Database** | Where everything is actually stored. SQL Server, on a machine in Azure. |
| **Deploy** | Putting a new version of a website live. Happens automatically when code is pushed to GitHub. |
| **Host** (Netlify, Vercel, Cloudflare) | Companies that run our websites for us. We have more than one so that if one fails, another copy is still up. |
| **Cache**, **cached copy** | A saved copy of a page or data, kept so the site is fast. The newsroom keeps pages for up to an hour, so changes can take up to an hour to appear. |
| **Draft** (admin) | Your edits, saved in your own browser on your own computer. Nobody else sees them until you commit. |
| **Commit** (admin) | Sending your draft to the API, so it becomes the real record everyone sees. |
| **Commit** (code) | A saved step in the code's history. Different thing, same word. |
| **Proxy** | A middleman. The admin talks to the API through one, because the API only accepts requests from addresses it knows. |
| **CORS** | A browser safety rule: a website can only ask another website for data if that other site allows it. When it fails, the admin shows "the API could not be reached". |
| **Slug** | The readable part of a web address, e.g. `mitsubishi-heavy-wins-order` in `/article/english/107246/mitsubishi-heavy-wins-order`. Chinese, Japanese and Korean headlines are spelled out in Latin letters for it. |
| **Environment variable** | A setting given to an app by its host, such as a password or an address. Set in the host's dashboard, never written in the code or on this site. |
| **Branch** (`main`, `staging`) | A line of work in the code. `main` is what the hosts put live. |
| **Repository**, **repo** | One project's code and its history, on GitHub. |
| **localStorage**, **browser storage** | Space inside your web browser where the admin keeps your drafts. It belongs to that browser on that computer only, and about 5 MB fits. Clearing your browser data deletes it. |
| **A/B test** | Showing two versions of a design (A and B) so people can vote on which is better. See [design voting](/guide/ab-testing). |
| **Mermaid** | The tool that draws the diagrams on this site from text. |

## Language codes

| Language | Code in the admin | Code from the API | On the newsroom |
| --- | --- | --- | --- |
| English | EN | EN | english |
| Simplified Chinese 简体中文 | ZH-HANS | ZH-CN | simplified-chinese |
| Traditional Chinese 繁體中文 | ZH-HANT | ZH-TW | traditional-chinese |
| Japanese 日本語 | JA | JA | japanese |
| Korean 한국어 | KO | KO | korean |
