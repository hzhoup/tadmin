export const loadedLocalePool = new Set<LocaleKey>()

export function setHtmlPageLang(locale: LocaleKey) {
  loadedLocalePool.add(locale)

  document.querySelector('html')?.setAttribute('lang', locale)
}

export const localeOptions = [
  { label: '简体中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' }
] as const

export type LocaleKey = (typeof localeOptions)[number]['value']

export const availableLocales: LocaleKey[] = localeOptions.map((locale) => locale.value)
