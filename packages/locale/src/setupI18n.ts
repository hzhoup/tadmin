import { createI18n } from 'vue-i18n'
import { useLocaleStoreWithOut } from '@tadmin/store'
import { availableLocales, setHtmlPageLang } from './helper'
import type { App } from 'vue'

export let i18n: ReturnType<typeof createI18n>

async function createI18nOptions() {
  const localeStore = useLocaleStoreWithOut()

  const defaultLocale = await import(`./lang/${localeStore.locale}.ts`)
  const message = defaultLocale.default ?? {}

  setHtmlPageLang(localeStore.locale)

  return {
    legacy: false,
    availableLocales,
    missingWarn: false,
    silentFallbackWarn: true,
    locale: localeStore.locale,
    silentTranslationWarn: true,
    fallbackLocale: localeStore.fallbackLocale,
    messages: {
      [localeStore.locale]: message
    }
  }
}

export async function setupI18n(app: App) {
  const options = await createI18nOptions()

  i18n = createI18n(options)

  app.use(i18n)
}
