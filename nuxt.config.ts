export default defineNuxtConfig({
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