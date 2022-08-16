module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      open: ['Open Sans, sans-serif'],
    },
    backgroundImage: {
      'banner-class': "url('/static/images/banner-class.png')",
    },
  },
  plugins: [require('daisyui')],
}
