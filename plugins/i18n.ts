import { createI18n, useI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ar from '../locales/ar.json'

export default defineNuxtPlugin(({ vueApp }) => {
  let lang
  if (process.client) {
    lang = localStorage.getItem('lang') ?? 'en'
  } else {
    lang = 'en'
  }
  useLang().value = lang

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    silentTranslationWarn: true,
    locale: lang,
    messages: {
      en,
      ar
    }
  })

  vueApp.use(i18n)

  // Add direction support
  vueApp.directive('dir', (el, binding) => {
    if (lang === 'ar') {
      el.style.direction = 'rtl'
    } else {
      el.style.direction = 'ltr'
    }
  })

  return
})