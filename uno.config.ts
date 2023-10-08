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
      primary: 'var(--el-color-primary)',
      success: 'var(--el-color-success)',
      warning: 'var(--el-color-warning)',
      danger: 'var(--el-color-danger)',
      error: 'var(--el-color-error)',
      info: 'var(--el-color-info)'
    }
  }
})
