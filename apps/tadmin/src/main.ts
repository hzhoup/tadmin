import { createApp } from 'vue'
import { setupAssets } from '@tadmin/assets'
import { setupStore } from '@tadmin/store'
import App from './App.vue'

async function bootstrap() {
  setupAssets()

  const app = createApp(App)

  setupStore(app)

  app.mount('#app')
}

bootstrap()
