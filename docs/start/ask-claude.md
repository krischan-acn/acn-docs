---
reviewed: 2026-10-23
---

# Ask Claude

You don't have to read this whole site. Claude can read it for you and answer in plain words.

## The easy way: the ACN project

On ACN's Claude Team plan there is a shared **project** with these docs loaded into it. Open it, start a chat, and ask the way you'd ask a colleague:

- "Why hasn't my edit to Mitsubishi Heavy's About text shown up on the website?"
- "What's the difference between a sector and an industry?"
- "The admin says *the API could not be reached*. Did I lose anything?"
- "How do I add a Tokyo listing to a company?"

Claude already knows our words: press release, issuer, sector, industry, exchange, listing. If it ever uses a term you don't know, ask it to say it plainly.

<a class="acn-cta" href="https://claude.ai/projects">Open Claude projects</a>

::: info Setting the project up (once, by an admin of the Team plan)
1. In claude.ai, create a project called **ACN Docs** and share it with the team.
2. Under project knowledge, add the GitHub repository `krischan-acn/acn-docs`, folder `docs/`.
3. Paste this into the project's instructions:
   > You answer questions from ACN Newswire staff using the project knowledge. Most of them are not developers. Use their words: press release, issuer, sector, industry, exchange, listing. Explain any technical term in one plain sentence before using it. When something has gone wrong, say what happened, what to do next, and whether any work was lost.
4. After big changes to the docs, re-sync the GitHub knowledge in the project settings.
:::

## Any other chat

Paste this link into any Claude chat and ask your question:

```
https://docs.acnnewswire.com/llms-full.txt
```

That file is this entire site as one plain-text document, made for AI tools to read. There is also [`/llms.txt`](/llms.txt), a short index of every page.

::: warning If the link above doesn't work
The site's final address is set when it goes live on Cloudflare. Until then, use the address from the Cloudflare dashboard, ending in `.workers.dev`, followed by `/llms-full.txt`.
:::

## For developers using Claude Code

Every code repository has an `AGENTS.md` and a `CLAUDE.md`. Claude Code reads them automatically when you start it inside the repo. They hold the rules for that codebase and point back here.
