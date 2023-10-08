import NProgress from 'nprogress'
import { useAppStoreWithOut, useLocaleStoreWithOut } from '@eadmin/store'
import { createPermissionGuard } from './permission'
import type { Router } from 'vue-router'

export function createRouterGuard(router: Router) {
  createPageLoadedGuard(router)
  createPageLoadingBarGuard(router)
  createProgressGuard(router)
  createPermissionGuard(router)
  createPageTitleGuard(router)
}

function createPageLoadedGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>()

  router.beforeEach((to) => {
    Object.assign(to.meta, { loaded: loadedPageMap.has(to.path) })

    return true
  })

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true)

    return true
  })
}

function createPageLoadingBarGuard(router: Router) {
  const appStore = useAppStoreWithOut()

  router.beforeEach((to) => {
    if (to.meta?.loaded === true) return true

    appStore.setPageLoading(true)

    return true
  })

  router.afterEach(() => {
    setTimeout(() => {
      appStore.setPageLoading(false)
    }, 120)

    return true
  })
}

function createProgressGuard(router: Router) {
  router.beforeEach(() => {
    NProgress.start()

    return true
  })

  router.afterEach(() => {
    setTimeout(() => {
      NProgress.done()
    }, 120)

    return true
  })
}

function createPageTitleGuard(router: Router) {
  const localeStore = useLocaleStoreWithOut()

  router.afterEach((to) => {
    const title = to.meta.title?.[localeStore.locale]
    const subTitle = import.meta.env.VITE_APP_TITLE
    useTitle(title ? `${title} | ${subTitle}` : subTitle)

    return true
  })
}
