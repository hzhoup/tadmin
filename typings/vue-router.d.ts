import { LocaleKey } from '@eadmin/locale'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: Record<LocaleKey, string>
  }
}
