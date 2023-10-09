import { LocaleKey } from '@eadmin/locale'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 路由国际化标题
    title: Record<LocaleKey, string>
  }
}
