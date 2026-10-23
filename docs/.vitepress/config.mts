import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import llmstxt from 'vitepress-plugin-llms'

// Read by every LLM that opens /llms.txt or /llms-full.txt. This is where the
// house vocabulary gets into Claude's head, so keep it in step with
// docs/start/glossary.md.
const llmsDetails = `
How to answer people who ask about ACN using these docs:

- Most readers are ACN staff, not developers. Answer in their words: "press release" (never "article"), "sector" (the 9 broad groups), "industry" (the 76 narrower ones inside a sector), "exchange" and "listing" (where a company's shares trade), "issuer" (the company a release is about).
- Do not lead with technical terms (CORS, DOM, ISR, API, cache). If one is unavoidable, explain it in one plain sentence first.
- When something has gone wrong, say what happened, what to do next, and whether any work was lost, in that order.
- There are two apps: the newsroom (the public website readers see, portal.acnnewswire.com) and the admin (the internal tool staff edit companies, press releases and events in).
- Pages under /reference/generated/ are built from the code and are the most reliable facts. Each one states the commit it was built from.
`

export default withMermaid(defineConfig({
  lang: 'en',
  title: 'ACN Docs',
  description: 'How the ACN Newswire newsroom and admin work, how to use them, and how to keep them running.',
  cleanUrls: true,
  lastUpdated: true,
  appearance: false, // light only, like both apps
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..700&display=swap' }],
    // Public so Claude can read it; kept out of search engines.
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ['link', { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'LLM index' }],
  ],
  vite: {
    plugins: [
      llmstxt({
        title: 'ACN Newswire documentation',
        description: 'The newsroom (public press release site) and the admin (internal editing tool) of ACN Newswire, an Asian press release distribution service publishing in English, Chinese, Japanese and Korean.',
        details: llmsDetails,
      }),
    ],
  },
  mermaid: {
    theme: 'neutral',
    // A system font, not Inter: Mermaid sizes its boxes when it renders, which
    // can be before the Inter web font has loaded, and the labels come out clipped.
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    flowchart: { padding: 16 },
  },
  themeConfig: {
    siteTitle: 'ACN Docs',
    nav: [
      { text: 'Staff guide', link: '/guide/' },
      { text: 'Build', link: '/build/' },
      { text: 'Runbooks', link: '/runbooks/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Ask Claude', link: '/start/ask-claude' },
    ],
    sidebar: [
      {
        text: 'Start here',
        items: [
          { text: 'The map', link: '/start/map' },
          { text: 'Glossary', link: '/start/glossary' },
          { text: 'Ask Claude', link: '/start/ask-claude' },
          { text: 'How we work', link: '/start/principles' },
        ],
      },
      {
        text: 'Staff guide',
        items: [
          { text: 'Overview', link: '/guide/' },
          { text: 'The newsroom', link: '/guide/newsroom' },
          { text: 'The admin: saving', link: '/guide/admin' },
          { text: 'Companies', link: '/guide/companies' },
          { text: 'Press releases', link: '/guide/press-releases' },
          { text: 'Events', link: '/guide/events' },
          { text: 'Design voting (A/B)', link: '/guide/ab-testing' },
        ],
      },
      {
        text: 'Build',
        items: [
          { text: 'Set up', link: '/build/' },
          { text: 'Hosting and deploys', link: '/build/hosting' },
          { text: 'Newsroom', link: '/build/newsroom' },
          { text: 'Admin', link: '/build/admin' },
          { text: 'The ACN API', link: '/build/api' },
          { text: 'This docs site', link: '/build/docs-site' },
        ],
      },
      {
        text: 'Runbooks',
        items: [
          { text: 'All runbooks', link: '/runbooks/' },
          { text: 'The API is down', link: '/runbooks/api-down' },
          { text: 'Homepage is blank', link: '/runbooks/blank-homepage' },
          { text: 'A press release won\'t open', link: '/runbooks/article-404' },
          { text: 'The admin won\'t save', link: '/runbooks/admin-wont-save' },
          { text: 'Undo a bad deploy', link: '/runbooks/rollback' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Overview', link: '/reference/' },
          { text: 'Sectors and industries', link: '/reference/generated/taxonomy' },
          { text: 'Newsroom routes', link: '/reference/generated/newsroom-routes' },
          { text: 'Newsroom env vars', link: '/reference/generated/newsroom-env' },
          { text: 'Newsroom API calls', link: '/reference/generated/newsroom-endpoints' },
          { text: 'Newsroom components', link: '/reference/generated/newsroom-components' },
          { text: 'Admin screens', link: '/reference/generated/admin-routes' },
          { text: 'Admin env vars', link: '/reference/generated/admin-env' },
          { text: 'Admin API calls', link: '/reference/generated/admin-endpoints' },
          { text: 'Decisions', link: '/reference/decisions' },
          { text: 'History', link: '/reference/history' },
        ],
      },
    ],
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/krischan-acn/acn-docs/edit/main/docs/:path',
      text: 'Edit this page',
    },
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous', next: 'Next' },
    footer: {
      message: 'Internal documentation for ACN Newswire. No passwords or keys belong on this site.',
    },
  },
}))
