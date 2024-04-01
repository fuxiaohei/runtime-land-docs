import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Runtime.land",
  description: "Tiny Function-as-a-Service",
  head: [
    ['link', { rel: 'shortcut icon', href: '/img/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
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
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fuxiaohei/runtime-land' }
    ],

    footer: {
      message: 'Released under the Apache License Version 2.0',
      copyright: `Copyright © 2023-${new Date().getFullYear()} | FuXiaohei`
    },
  }
})
