// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    "@/assets/styles/scss/custom.scss"
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/scss/theme/_variables.scss" as *;'
        }
      }
    }

  },
  modules: [
   
  ],
})
