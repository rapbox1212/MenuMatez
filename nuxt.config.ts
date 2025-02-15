// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-quasar-ui',
    '@vite-pwa/nuxt',
  ],

  quasar: {
    plugins: [
      'Notify', // For notifications
      'Loading' // For loading state
    ],
    extras: {
      font: 'roboto-font', // Add Roboto font
      fontIcons: [
        'material-icons',  // Required for icons
        'fontawesome-v5'   // For social media icons
      ]
    },
    config: {
      // Optional Quasar config
    }
  }
})