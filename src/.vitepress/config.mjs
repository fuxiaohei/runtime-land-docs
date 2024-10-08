import { defineConfig } from 'vitepress'

const topSidebar = () => [
  {
    text: 'Guide',
    link: '/guide',
  },
  {
    text: 'Docs',
    link: '/docs/',
    items: [
      { text: 'JavaScript APIs', link: '/docs/js-api' },
    ],
  },
  {
    text: 'Examples',
    link: '/examples/',
  },
  /*
  {
    text: 'Examples',
    items: [
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' }
    ]
  }*/
]

const docSidebar = () => [
  {
    text: 'Docs',
    link: '/docs',
  },
  {
    text: 'JavaScript APIs',
    link: '/docs/js-api',
    collapsed: false,
    items: [
      { text: 'Web Standards', link: '/docs/js-api/web-standards' },
      { text: 'Console', link: '/docs/js-api/console' },
      { text: 'Context', link: '/docs/js-api/context' },
      { text: 'Environment', link: '/docs/js-api/environment' },
      { text: 'Encoding', link: '/docs/js-api/encoding' },
      { text: 'Fetch', link: '/docs/js-api/fetch' },
      { text: 'Request/Response', link: '/docs/js-api/request-response' },
      { text: 'Streams', link: '/docs/js-api/streams' },
      { text: 'Web Crypto', link: '/docs/js-api/web-crypto' },
      { text: 'Performance and timers', link: '/docs/js-api/performance-timers' },
    ],
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Runtime.land",
  description: "Tiny Function-as-a-Service",
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'shortcut icon', href: '/img/favicon.ico' }],
    ['meta', { property: 'og:image', content: 'https://hono.dev/images/hono-title.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo.png',
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Examples', link: '/examples/' }
    ],

    sidebar: {
      "/": topSidebar(),
      "/docs/": docSidebar(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fuxiaohei/runtime-land' }
    ],

    footer: {
      message: 'Released under the Apache License Version 2.0',
      copyright: `Copyright © 2023-${new Date().getFullYear()} | FuXiaohei`
    },
  }
})
