import { LoadingPlugin } from 'tdesign-vue-next'
import { useAppStore } from '../modules'

export function subscribeAppStore() {
  const appStore = useAppStore()

  const scope = effectScope()

  scope.run(() => {
    /**
     * 监听主题变化，切换tdesign主题
     */
    watch(
      () => appStore.isDark,
      (newValue) => {
        if (newValue) {
          document.documentElement.setAttribute('theme-mode', 'dark')
        } else {
          document.documentElement.removeAttribute('theme-mode')
        }
      },
      { immediate: true }
    )

    watch(
      () => appStore.pageLoading,
      (newValue) => {
        LoadingPlugin(newValue)
      },
      { immediate: true }
    )
  })

  onScopeDispose(() => {
    scope.stop()
  })
}
