import { store } from '../setupStore'

export const useAppStore = defineStore('app', () => {
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  const pageLoading = ref(false)
  function setPageLoading(loading: boolean) {
    pageLoading.value = loading
  }

  return { isDark, toggleDark, pageLoading, setPageLoading }
})

export const useAppStoreWithOut = () => useAppStore(store)
