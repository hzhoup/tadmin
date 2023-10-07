import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import type { App } from 'vue'

export const router = createRouter({
  routes,
  strict: true,
  history: createWebHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export async function setupRouter(app: App) {
  app.use(router)

  await router.isReady()
}
