---
reviewed: 2026-10-23
---

# The newsroom

The public website where readers find our press releases: **portal.acnnewswire.com**. A second copy runs at acn-newswire.vercel.app in case the first one fails.

## What's on it

| Page | Address | What readers see |
| --- | --- | --- |
| Home | `/` | Rotating headline photos, upcoming events, featured releases, then a row of releases for each sector |
| A press release | `/article/…` | The release, its company, more from that company, then the next release loads as you scroll |
| A company | `/company/82` | The company's profile and all its releases, 15 per page |
| All press releases | `/news` | Every release, newest first |
| Events | `/events` | Upcoming and recent events |
| Search | `/search` | Search by **company name**, or browse by sector |

Search finds companies, not words inside releases. Typing "Mitsubishi" finds the company; typing "hydrogen" finds nothing yet.

## Press release addresses

A full address looks like this:

```
portal.acnnewswire.com/article/japanese/108773/mitsubishi-heavy-wins-order
                               └ language └ number └ headline, in Latin letters
```

- **Only the number matters.** `/article/108773` opens the same release. A typo in the headline part doesn't break the link.
- Chinese, Japanese and Korean headlines are written out in Latin letters, so links stay readable when pasted into emails and chats.
- Most releases currently show `english` as the language even when they're not. The newswire doesn't send the language for many releases yet.

## Why a change takes up to an hour to show

The newsroom keeps a copy of every page for up to an hour. That's what makes it fast: most readers get the saved copy instantly, without waiting for the newswire.

So after a change in the admin, **allow up to an hour** before it appears. This is normal.

## When the newsroom looks wrong

| What you see | Most likely | Go to |
| --- | --- | --- |
| The homepage is empty or half-empty | The newswire was down when the page was last refreshed | [Homepage is blank](/runbooks/blank-homepage) |
| A release says "not found" | Wrong number, or the release isn't published | [A press release won't open](/runbooks/article-404) |
| Two homepage rows are always empty | Normal for now: Cryptocurrency and Sustainability have no releases in the new data yet | Nothing to do |
| An edit from the admin isn't showing | The one-hour copy | Wait an hour |
