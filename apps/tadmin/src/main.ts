import { createApp } from 'vue'
import { setupAssets } from '@eadmin/assets'
import { setupI18n } from '@eadmin/locale'
import { setupRouter } from '@eadmin/router'
import { setupStore } from '@eadmin/store'
import TaUi from '@eadmin/ui'
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
