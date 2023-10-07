import { defineConfig, presetTypography, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist', 'public', 'mock']
    }
  },
  presets: [presetUno(), presetTypography()],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      brand: 'var(td-brand-color)',
      warning: 'var(td-warning-color)',
      error: 'var(td-error-color)',
      success: 'var(td-success-color)'
    }
  }
})
