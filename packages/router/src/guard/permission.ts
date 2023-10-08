import { useAuthStoreWithOut } from '@tadmin/store'
import type { Router, RouteLocationRaw } from 'vue-router'

export function createPermissionGuard(router: Router) {
  const authStore = useAuthStoreWithOut()

  router.beforeEach(async (to, from, next) => {
    if (to.path === '/login' && authStore.token) {
      next((to.query?.redirect as string) ?? '/')
      return
    }

    if (!authStore.token) {
      if (to.meta?.ignoreAuth) {
        next()
        return
      }

      const redirectData: RouteLocationRaw = {
        path: '/login',
        replace: true
      }
      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: to.path
        }
      }

      next(redirectData)
      return
    }

    if (from.path === '/login' && to.name === 'PageNotFound') {
      next('/')
      return
    }

    next()
  })
}
