# Runbooks

When something is wrong: what you'll see, what to check, what to do. Each one starts with steps anyone can follow, and gets more technical further down.

<div class="acn-buttons">
  <a class="acn-button" href="/runbooks/api-down">
    <span class="acn-button-no">01</span>
    <span class="acn-button-title">The API is down</span>
    <span class="acn-button-text">The admin can't reach the newswire, lists are stale, pages won't load.</span>
  </a>
  <a class="acn-button" href="/runbooks/blank-homepage">
    <span class="acn-button-no">02</span>
    <span class="acn-button-title">Homepage is blank</span>
    <span class="acn-button-text">The newsroom's front page is empty or missing sections.</span>
  </a>
  <a class="acn-button" href="/runbooks/article-404">
    <span class="acn-button-no">03</span>
    <span class="acn-button-title">A press release won't open</span>
    <span class="acn-button-text">"Not found", or an error page, on a release that should exist.</span>
  </a>
  <a class="acn-button" href="/runbooks/admin-wont-save">
    <span class="acn-button-no">04</span>
    <span class="acn-button-title">The admin won't save</span>
    <span class="acn-button-text">Commit fails, changes stay local, storage is full.</span>
  </a>
  <a class="acn-button" href="/runbooks/rollback">
    <span class="acn-button-no">05</span>
    <span class="acn-button-title">Undo a bad deploy</span>
    <span class="acn-button-text">A new version went live and broke something.</span>
  </a>
</div>

## Before anything else

1. **Is it everyone, or just you?** Try another browser or your phone on mobile data.
2. **Is it both newsroom copies?** Check portal.acnnewswire.com **and** acn-newswire.vercel.app. If only one is broken, it's that host or that deploy, and readers can be pointed at the other.
3. **Is it the API?** Open `https://development.acnnewswire.com/api/Articles?Page=1&Size=1`. A short block of text starting with `[{` means it's up. An error page means [the API is down](/runbooks/api-down).
