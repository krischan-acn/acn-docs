# Undo a bad deploy

A new version went live and something broke. The quickest fix is to put the previous version back from the host's dashboard. That takes seconds, needs no code, and you can fix the code calmly afterwards.

## 1. Put the last good version back

**Netlify** (portal.acnnewswire.com)
1. Site → **Deploys**.
2. Click the last deploy that worked.
3. **Publish deploy**.

**Vercel** (acn-newswire.vercel.app, and the admin)
1. Project → **Deployments**.
2. On the last good one: **⋯** → **Promote to Production** (or **Instant Rollback**).

**Cloudflare** (this docs site)
1. Workers & Pages → `acn-docs` → **Deployments**.
2. On the last good one: **Rollback**.

The newsroom runs on two hosts. **Roll back both**, or readers will see different versions depending on the address.

## 2. Stop the next push from breaking it again

The dashboard rollback lasts only until the next deploy. Fix or revert the code:

```bash
git revert <bad-commit>     # makes a new commit that undoes it; never rewrite main's history
git push all main           # newsroom: both copies
```

## 3. Write it down

Add a dated entry to the [history](/reference/history): what broke, how it was noticed, what fixed it.
