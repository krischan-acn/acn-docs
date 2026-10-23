---
layout: page
title: ACN Docs
---

<div class="vp-doc" style="max-width: 1152px; margin: 0 auto; padding: 48px 24px 96px;">

<div class="acn-masthead">
  <div class="acn-kicker">ACN Newswire · Documentation</div>
  <h1>How our sites work,<br>and how to work them.</h1>
  <p class="acn-lede">Two pieces of software: the <strong>newsroom</strong>, the public website where readers find press releases, and the <strong>admin</strong>, the internal tool where we edit companies, press releases and events.</p>
</div>

<div class="acn-buttons">
  <a class="acn-button" href="/guide/">
    <span class="acn-button-no">01</span>
    <span class="acn-button-title">I work at ACN</span>
    <span class="acn-button-text">How to use the admin and what readers see on the newsroom. No jargon.</span>
  </a>
  <a class="acn-button" href="/runbooks/">
    <span class="acn-button-no">02</span>
    <span class="acn-button-title">Something is broken</span>
    <span class="acn-button-text">The site is blank, a release won't open, the admin won't save. What to do, step by step.</span>
  </a>
  <a class="acn-button" href="/build/">
    <span class="acn-button-no">03</span>
    <span class="acn-button-title">I build or fix things</span>
    <span class="acn-button-text">Setting up the code, where everything is hosted, the rules each codebase follows.</span>
  </a>
  <a class="acn-button" href="/start/ask-claude">
    <span class="acn-button-no">04</span>
    <span class="acn-button-title">Ask Claude</span>
    <span class="acn-button-text">Have Claude read all of this and answer your question in plain words.</span>
  </a>
</div>

## The whole thing on one page

```mermaid
flowchart LR
  reader(["Readers"]) --> newsroom["Newsroom<br/>portal.acnnewswire.com"]
  staff(["ACN staff"]) --> admin["Admin<br/>internal"]
  newsroom -- "reads" --> api["ACN API<br/>development.acnnewswire.com"]
  admin -- "reads and writes" --> api
  api --> db[("SQL Server<br/>Azure VM")]
  legacy["Old website<br/>www.acnnewswire.com"] --> db
```

Start with [the map](/start/map) for the full picture, or the [glossary](/start/glossary) if a word on this site means nothing to you.

</div>
