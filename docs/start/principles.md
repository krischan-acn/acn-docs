# How we work

These rules apply to every person and every AI working on ACN's software. They come from the [ACN knowledge base](https://github.com/krischan-acn/ACN-knowledge-base/blob/main/PRINCIPLES.md), which is the original; if the two ever disagree, the knowledge base wins.

## Chesterton's fence

**Don't remove, rename or "clean up" something until you know why it is there.**

That covers code, settings, copy, a redirect, a branch, or a step in a process. If you can't say what it's for, leave it, find out, and ask before changing it.

Where to find out: the [decisions](/reference/decisions) page, the code's git history (`git log -p <file>`, `git blame`), the comments around it, then a teammate.

Examples from our own code:
- The newsroom hosted twice looks like a mistake. It's on purpose.
- The admin calls the API through `/wire` rather than directly. Removing that breaks every deployed copy.
- An odd old URL may still carry links and search rankings. It gets a redirect, never a deletion.

## Pareto

**Start with the small part of the work that carries most of the result.** About 20% of the effort usually gives about 80% of the outcome. When that path is clear, take it first; don't spend the session on busywork while it's still open.

## Jakob's law

**People spend most of their time on other websites, so they expect ours to work the same way.** Design for familiarity and for ACN's actual readers, many of whom are older and click around a lot:
- visible, labelled navigation;
- the main action where people expect it;
- no hidden menus;
- no surprise new tabs.

Utilitarian by choice.

## Two modes

- **Brainstorm mode:** talking ideas through, research, drafting docs. Start right away and ask questions as you go.
- **Work mode:** anything that changes code, a live site, DNS, an account, or is hard to undo. First:
  1. restate the request;
  2. say what's out of scope;
  3. ask at least three clarifying questions;
  4. wait for a clear yes.

When unsure, it's work mode.

## Nothing goes live without approval

No change reaches a public ACN site without approval for that exact change. Previews and drafts are fine.

## No secrets, anywhere in writing

Passwords, API keys, tokens and recovery codes never go in code, docs, chat logs or this site. Write down **which** setting exists and **where** it is set (e.g. "`AB_SECRET`, in the Netlify and Vercel dashboards"), never its value.

This site is public. Also keep off it anything that would help someone attack us: login weaknesses, unprotected endpoints, server details. Those go in the private knowledge base.

## Speak the reader's language

When writing for staff or answering their questions, use the words in the first column of the [glossary](/start/glossary). Never make someone ask what CORS or the DOM is.
