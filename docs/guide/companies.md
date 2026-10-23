---
reviewed: 2026-10-23
---

# Companies

There are about 9,600 companies. All of them load into the list at once, so search and filters cover everything, not just the page you're on.

## Finding a company

- **Search** matches English, Japanese and Chinese names, and the company number.
- **A–Z** along the side jumps by first letter.
- **Filters** on the column headers: Status, Exchange, and Sector.
- **Columns** lets you show or hide ID, Status, Primary listing, Sectors and Last modified.
- **Spreadsheet view** shows every company as a sheet (see below).

"Last modified" shows a dash for most companies. The newswire doesn't record when a company was changed, so the admin can't show it.

## The company page

Five tabs across the middle, and a panel on the right.

| Tab | What's on it |
| --- | --- |
| **Basic Info** | Company name in all five languages · two logos (article page and top page) · **About Company**, the boilerplate printed at the bottom of every release |
| **Contacts** | People to contact: name, position, email, phone, contact type, email format |
| **Distribution** | Wire services, RSS feeds, delivery settings |
| **Identifiers** | **Exchange listings** · Reuters codes · Bloomberg codes |
| **Company Details** | Founded, listing date, employees, DUNS, legal name, country · website and social links · address · two key people |

The right-hand panel holds **sector**, **industry**, **status** (Active, Inactive, Draft), **languages**, the annual report, the portal login, and when the record was created and changed.

::: warning Known bug: "Extended About Boilerplate"
Typing in the *Extended About Boilerplate* box overwrites the main **About Company** text. Avoid that box until it's fixed.
:::

## Exchanges and listings

A listing is one exchange plus the company's ticker on it. Add them on **Identifiers**.

- **Exchange code** is the four-letter code: XTKS (Tokyo), XHKG (Hong Kong), XSES (Singapore), XNYS (New York) and so on.
- The **first listing is the primary one**. It appears in the company list's "Primary listing" column as `XTKS · 7011`.
- ISIN, SEDOL and CUSIP can be filled in but stay in your browser for now.

::: warning Listings may be refused at the moment
The newswire's list of exchanges is empty on its side. Until it's filled in, it refuses every new listing. A fix has been sent to the API team (October 2026).
:::

## Sector, industry and codes

In the right-hand panel:

- **Sector**: choose from the 76 entries, grouped by their broad sector. Choosing one **automatically adds** the matching Reuters and Bloomberg codes.
- **Industry**: one main entry from the newswire's own list of 43.

::: info Two lists, similar names
The company page's "Sector" list is really ACN's 76 *industries* grouped under the 9 sectors, and its "Industry" list is a separate set of 43 from the newswire. On press releases, sector means the broad group and industry the narrow one, as everywhere else. A fix to line the names up is planned.
:::

## Languages

Each language dot cycles through three states when clicked: not used → also published (black) → **main language** (green). Only one language can be the main one. Right-click a dot for a menu.

## Logos and the annual report

- Logos: SVG, PNG, JPG, GIF or WebP, up to 3 MB.
- Annual report: PDF only.

::: warning Uploads don't reach the website yet
The newswire has no way to receive files yet, so uploaded logos and reports stay in your browser. Only file names are sent.
:::

## Spreadsheet view

Edit many companies at once, like Excel: type, paste, fill down.
- Sorting doesn't count as an edit.
- The button reads **Save changes (N)**.
- If you try to leave with unsaved cells, the browser warns you.
- Saving here creates **drafts**. Commit each one from its company page.

## New company

**+ New company** starts a draft numbered from 9,000,001. The first commit creates the real company, which then gets its proper number.

## Import and export

At the bottom of the right-hand panel:
- **Export as JSON**: downloads the whole record as a file.
- **Import JSON**: loads such a file and replaces your current draft.
