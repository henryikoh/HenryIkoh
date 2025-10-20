export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Henry Ikoh | Build and launch MVP',
    meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					"Hi, I'm Henry Ikoh, a Fullstack Product Engineer⚡️I help Ambitious Entrepreneurs and Founders make sense of the chaos of building SAAS Products helping them go from 0 - 1",
			},
			{
				name: 'apple-mobile-web-app-status-bar-style',
				content: 'default',
			},
			{
				hid: 'og:title',
				name: 'og:title',
				content: 'Henry Ikoh | Build and launch MVP',
			},
			{
				hid: 'og:description',
				name: 'og:description',
				content:
        "Hi, I'm Henry Ikoh, a Fullstack Product Engineer⚡️I help Ambitious Entrepreneurs and Founders make sense of the chaos of building SAAS Products helping them go from 0 - 1",
			},
			{
				hid: 'og:image',
				name: 'og:image',
				content: 'https://henryikoh.com/meta.png',
			},
			{
				hid: 'og:url',
				name: 'og:url',
				content: 'henryikoh.com/',
			},
			{
				hid: 'twitter:card',
				name: 'twitter:card',
				content: 'summary_large_image',
			},
		],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favic.png',
    },
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '/favic.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/x-icon',
      href: '/favic.png',
    },
    	{
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap',
    },
    {
      rel: 'canonical',
    
      href: 'https://www.henryikoh.com',
    }
  ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/gtag.js'
  ],

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
   
    '@nuxtjs/sitemap'
  ],
  // googleAnalytics: {
  //   id: 'UA-220760089-1'
  // },
  hooks: {
		'content:file:beforeInsert': document => {
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
		hostname: 'https://www.henryikoh.com/',
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

			const articles = await $content('articles')
				.only(['slug'])
				.fetch()

			const projects = await $content('projects')
				.only(['slug'])
				.fetch()

			const articleRoutes = articles.map(file => '/blog/' + file.slug)
			const projectRoutes = projects.map(file => '/projects/' + file.slug)

			return [...articleRoutes, ...projectRoutes]
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
