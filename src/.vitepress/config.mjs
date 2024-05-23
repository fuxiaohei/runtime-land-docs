import { defineConfig } from 'vitepress'

const topSidebar = () => [
  {
    text: 'Guide',
    link: '/guide',
  },
  {
    text: 'Docs',
    link: '/docs/',
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
    collapsed: false,
    items: [
      { text: 'Fetch API', link: '/docs/js-api/fetch-api' },
      { text: 'Web Standards', link: '/docs/js-api/web-standards' },
      { text: 'Web Streams', link: '/docs/js-api/web-streams' },
      { text: 'Web Crypto', link: '/docs/js-api/web-crypto' },
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
