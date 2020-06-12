export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Henry Ikoh | Creative Entreprenuer Building the Future with Design and Code',
    meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:'Creative Entrepreneur exploring how Design, Art, and Technology might be used to build a better future for humanity.',
			},
			{
				name: 'apple-mobile-web-app-status-bar-style',
				content: 'default',
			},
			{
				hid: 'og:title',
				name: 'og:title',
				content: 'Henry Ikoh | Creative Entreprenuer Building the Future with Design and Code'
			},
			{
				hid: 'og:description',
				name: 'og:description',
				content: 'Creative Entrepreneur exploring how Design, Art, and Technology might be used to build a better future for humanity.',
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
