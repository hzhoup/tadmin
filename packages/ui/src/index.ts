import * as components from './components'
import type { App } from 'vue'

export function install(app: App): void {
  Object.keys(components).forEach((key) => {
    app.use(components[key])
  })
}

export * from './components'

export default {
  install
}
