interface ImportMetaEnv {
  // 应用名称
  readonly VITE_APP_TITLE: string
  // 是否开启mock插件
  readonly VITE_USE_MOCK: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
