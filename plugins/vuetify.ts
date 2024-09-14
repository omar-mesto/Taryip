import { createVuetify } from 'vuetify'
import { VMain, VOtpInput } from 'vuetify/components'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    
    components:{
      VOtpInput,
      VMain
    }
  })

  nuxtApp.vueApp.use(vuetify)
})