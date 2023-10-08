import { createApp } from 'vue'
import { setupAssets } from '@tadmin/assets'
import { setupStore } from '@tadmin/store'
import { setupRouter } from '@tadmin/router'
import { setupI18n } from '@tadmin/locale'
import TaUi from '@tadmin/ui'
import App from './App.vue'

async function bootstrap() {
  setupAssets()

  const app = createApp(App)

  setupStore(app)

  await setupI18n(app)

  await setupRouter(app)

  app.use(TaUi)

  app.mount('#app')
}

bootstrap()
