import { createPersistedState } from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

export const store = createPinia()

export function setupStore(app: App) {
  store.use(
    createPersistedState({
      storage: localStorage,
      key: (key) => key.toUpperCase()
    })
  )

  app.use(store)
}
