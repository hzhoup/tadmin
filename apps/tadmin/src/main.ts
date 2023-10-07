import { createApp } from 'vue'
import { setupAssets } from '@tadmin/assets'
import App from './App.vue'

async function bootstrap() {
  setupAssets()

  const app = createApp(App)

  app.mount('#app')
}

bootstrap()
