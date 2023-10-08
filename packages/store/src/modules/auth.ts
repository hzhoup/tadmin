import { store } from '../setupStore'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const token = ref<string>()

    return { token }
  },
  {
    persist: {
      paths: ['token']
    }
  }
)

export const useAuthStoreWithOut = () => useAuthStore(store)
