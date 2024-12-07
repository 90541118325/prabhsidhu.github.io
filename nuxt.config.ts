export default defineNuxtConfig({
  app: {
    baseURL: '/prabhsidhu.github.io/', // Correct base URL for GitHub Pages
    head: {
      title: 'Prabhdeep Singh - Personal Site',
      meta: [
        { name: 'description', content: 'Personal site by Prabhdeep Singh' },
      ],
    },
  },

  layout: 'default', // Define the default layout
  ssr: true, // Enable server-side rendering
  target: 'static', // Target static files for GitHub Pages
  css: ['~/assets/css/theme.css'], // Include your custom theme CSS
  
  compatibilityDate: '2024-11-30', // Compatibility date for Nuxt.js
});
