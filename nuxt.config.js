export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Henry Ikoh | Systems That Work From Day One',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { name: 'author', content: 'Henry Ikoh' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Henry Ikoh helps founders and organizations see what's broken and design systems that actually work. Systems architect. Product engineer. Builder.",
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Henry Ikoh' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Henry Ikoh | Systems That Work From Day One',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          "Henry Ikoh helps founders and organizations see what's broken and design systems that actually work. Systems architect. Product engineer. Builder.",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.henryikoh.com/meta.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Henry Ikoh — Systems That Work From Day One',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.henryikoh.com/',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Henry Ikoh | Systems That Work From Day One',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          "Henry Ikoh helps founders and organizations see what's broken and design systems that actually work.",
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.henryikoh.com/meta.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: '/favic.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favic.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/gtag.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxtjs/sitemap',
  ],
  // googleAnalytics: {
  //   id: 'UA-220760089-1'
  // },
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { text } = require('reading-time')(document.text)

        document.readingTime = text
        const slug = document.title
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '')
        document.slug = slug
      }
    },
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vs.css',
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  sitemap: {
    hostname: 'https://www.henryikoh.com',
    gzip: true,
    trailingSlash: false,
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    },
    async routes() {
      const { $content } = require('@nuxt/content')

      const articles = await $content('articles').only(['slug']).fetch()
      const projects = await $content('projects').only(['slug']).fetch()
      const ideas = await $content('ideas').only(['slug']).fetch()

      return [
        { url: '/', priority: 1.0, changefreq: 'weekly' },
        { url: '/system', priority: 0.9 },
        { url: '/discovery', priority: 0.9 },
        { url: '/founders', priority: 0.8 },
        { url: '/contact', priority: 0.7 },
        { url: '/ideas', priority: 0.7 },
        ...articles.map((a) => ({ url: `/blog/${a.slug}`, priority: 0.8 })),
        ...projects.map((p) => ({ url: `/projects/${p.slug}`, priority: 0.7 })),
        ...ideas.map((i) => ({ url: `/ideas/${i.slug}`, priority: 0.6 })),
      ]
    },
  },
  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0', // default: localhost,
  //   timing: false
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  generate: {
    // fetch all articles and projects and generate
    async routes() {
      const { $content } = require('@nuxt/content')

      const articles = await $content('articles').only(['slug']).fetch()

      const projects = await $content('projects').only(['slug']).fetch()

      const ideas = await $content('ideas').only(['slug']).fetch()

      const articleRoutes = articles.map((file) => '/blog/' + file.slug)
      const projectRoutes = projects.map((file) => '/projects/' + file.slug)
      const ideaRoutes = ideas.map((file) => '/ideas/' + file.slug)

      return [...articleRoutes, ...projectRoutes, ...ideaRoutes]
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
