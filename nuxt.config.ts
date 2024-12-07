export default defineNuxtConfig({
  router: {
    base: 'https://90541118325.github.io/prabhsidhu.github.io/'
  }

  layout: 'default',
  ssr: true,
  target: 'static',
  css: ['~/assets/css/theme.css'],

  app: {
    head: {
      title: 'Prabhdeep Singh - Personal Site',
      meta: [{ name: 'description', content: 'Personal site by Prabhdeep Singh' }],
    },
  },

  compatibilityDate: '2024-11-30',
});
