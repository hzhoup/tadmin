import { useLocaleStoreWithOut } from '@tadmin/store'
import { LocaleKey, loadedLocalePool, setHtmlPageLang } from './helper'
import { i18n } from './setupI18n'
import type { Ref } from 'vue'

function setI18nLanguage(locale: LocaleKey) {
  const localeStore = useLocaleStoreWithOut()

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    ;(i18n.global.locale as Ref<string>).value = locale
  }
  localeStore.setLocale(locale)
  setHtmlPageLang(locale)
}

type UseLocaleReturnType = {
  t: typeof i18n.global.t
  getTLocale: any
  changeLocale: (locale: LocaleKey) => Promise<LocaleKey | null>
}

export function useLocale(): UseLocaleReturnType {
  const localeStore = useLocaleStoreWithOut()

  const getTLocale = computed(() => {
    // @ts-expect-error
    return i18n.global.getLocaleMessage(localeStore.getLocale)?.tLocale
  })

  async function changeLocale(locale: LocaleKey) {
    const currentLocale = localeStore.locale
    if (locale === currentLocale) {
      return locale
    }

    if (loadedLocalePool.has(locale)) {
      setI18nLanguage(locale)
      return locale
    }

    const module = (await import(`./lang/${locale}.ts`)).default
    if (!module) return null

    i18n.global.setLocaleMessage(locale, module)
    setI18nLanguage(locale)
    return locale
  }

  return {
    t: i18n.global.t,
    getTLocale,
    changeLocale
  }
}
