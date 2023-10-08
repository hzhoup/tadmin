import components from './components'
import type { App } from 'vue'

export function install(app: App): void {
  components.forEach((c) => app.use(c))
}

export * from './components'

export default {
  install
}
