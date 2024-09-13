export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [  
    'vuetify/lib/styles/main.sass',  
    '@mdi/font/css/materialdesignicons.min.css',  
    "@/assets/styles/scss/custom.scss"  
  ],

  build: {  
    transpile: ['vuetify'],  
  },

  vite: {  
    vue: {  
      template: {  
        transformAssetUrls: {  
          // Define how to transform asset URLs for different tags  
          img: 'src',  
          image: 'xlink:href',  
          // Add more mappings as necessary  
        },  
      },  
    },  
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

  modules: ['vuetify-nuxt-module'],

  app: {  
    head: {  
      link: [  
        { rel: 'manifest', href: '/manifest.json' }  
      ]  
    }  
  },

  pwa: {  
    manifest: {  
      name: 'Taryiq',  
      short_name: 'Taryiq',  
      // lang: 'en',  
      theme_color: '#ffffff',  
      background_color: '#ffffff',  
      display: 'standalone',  
      icons: [  
        {  
          src: '/icon.png', // Path to your icon file  
          sizes: '192x192',  
          type: 'image/png'  
        },  
        {  
          src: '/icon-512.png', // Path to your larger icon file  
          sizes: '512x512',  
          type: 'image/png'  
        }  
      ]  
    },  
    workbox: {  
      // Workbox options  
      runtimeCaching: [  
        {  
          urlPattern: 'https://example.com/.*',  
          handler: 'CacheFirst',  
          method: 'GET',  
          strategyOptions: {  
            cacheableResponse: {  
              statuses: [0, 200]  
            }  
          }  
        }  
      ]  
    }  
  },

  compatibilityDate: '2024-09-12'
});