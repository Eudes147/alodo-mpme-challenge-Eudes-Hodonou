// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/google-fonts','@vueuse/nuxt',],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700] // Poids nécessaires pour les titres, boutons et textes
    },
    display: 'swap',
    download: true // Télécharge la police en local pour de meilleures performances
  }
})
