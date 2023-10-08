import { LocaleKey } from '@tadmin/locale'
import { store } from '../setupStore'

interface LocaleState {
  locale: LocaleKey
  fallbackLocale: LocaleKey
}

export const useLocaleStore = defineStore(
  'locale',
  () => {
    const state = reactive<LocaleState>({
      locale: 'zh-CN',
      fallbackLocale: 'zh-CN'
    })

    function setLocale(locale: LocaleKey) {
      state.locale = locale
    }

    return { ...toRefs(state), setLocale }
  },
  {
    persist: true
  }
)

export const useLocaleStoreWithOut = () => useLocaleStore(store)
