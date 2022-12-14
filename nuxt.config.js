export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'latihanNuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/globals.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://fazz-course.herokuapp.com', // default localhost:3000)
  },

  // set semua router menggunakan token
  router: {
    middleware: ['auth'],
  },

  // setup nuxt auth
  auth: {
    watchLoggedIn: true,
    // list authentikasi yang akan di pasang
    // strategies untuk api
    // contoh authentikasi via be, google, facebook, dll
    strategies: {
      // nama auth misal dari be,
      local: {
        // dari properti apa tergantung dari api
        // token di simpan di localstorage
        token: {
          type: 'Bearer',
          property: 'data.token',
          // expired token
          // maxAge: '',
          global: true,
        },
        // generate store profile dari response auth login
        // data user disimpan di store vuex
        user: {
          property: 'data',
        },
        // endpoint ini di pakai untuk axios nanti
        endpoints: {
          login: {
            url: '/user/auth/login',
            method: 'post',
          },
          user: {
            url: 'user/auth/profile',
            method: 'get',
          },
          // jika tidak ada endpoint kasih nilai false
          logout: false,
        },
        tokenRequired: true,
        // autoFetchUser : false
      },
    },
    // url nuxt js
    redirect: {
      login: '/auth/login',
      logout: '/',
      // untuk kondisi jika belum login tendang ke halaman apa / home misalnya bre.
      callback: '/auth/login',
      // halaman index
      home: '/',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
