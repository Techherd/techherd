//const pkg = require('./package')
import axios from 'axios'

export default {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    script: [
      {
        src:
          'https://api.techherd.co/wp-content/plugins/gravityforms/js/gravityforms.min.js'
      },
      {
        src: 'https://platform.twitter.com/widgets.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://api.techherd.co/wp-includes/css/dist/block-library/style.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://api.techherd.co/wp-content/plugins/ultimate-addons-for-gutenberg/dist/blocks.style.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Saira+Semi+Condensed&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Registering pages to state
   */
  router: {
    middleware: 'pages'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
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
  generate: {
    routes: function() {
      return axios
        .get('https://api.techherd.co/wp-json/wp/v2/posts')
        .then(res => {
          //store.commit('storePosts', res.data)
          return res.data.map(post => {
            return '/blog/' + post.slug
          })
        })
    },
    fallback: '404.html'
  }
}
