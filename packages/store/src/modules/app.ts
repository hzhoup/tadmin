import { store } from '../setupStore'

export const useAppStore = defineStore(
  'app',
  () => {
    const isDark = useDark()
    const toggleDark = useToggle(isDark)

    return { isDark, toggleDark }
  },
  {
    persist: true
  }
)

export const useAppStoreWithOut = () => useAppStore(store)
