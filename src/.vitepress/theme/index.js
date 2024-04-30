// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import AlphaMessage from './components/AlphaMessage.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "home-features-before": () => h(AlphaMessage)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
