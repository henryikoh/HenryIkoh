export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Shoply | Empowering humans to buy the things they love. ❤️',
    meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:'Empowering humans to buy the things they love from people they trust.',
			},
			{
				name: 'apple-mobile-web-app-status-bar-style',
				content: 'default',
			},
			{
				hid: 'og:title',
				name: 'og:title',
				content: 'Shoply | Empowering humans to buy the things they love. ❤️'
			},
			{
				hid: 'og:description',
				name: 'og:description',
				content: 'Empowering humans to buy the things they love from people they trust in our connected world.',
			},
			{
				hid: 'og:image',
				name: 'og:image',
				content: 'https://henryikoh.com/meta.png',
			},
			{
				hid: 'og:url',
				name: 'og:url',
				content:'henryikoh.com/'
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
      href: '/favico.png'
    }, {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap',
    }, ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  
}
