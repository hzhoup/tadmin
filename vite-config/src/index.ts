import { resolve } from 'node:path'
import { defineConfig, mergeConfig } from 'vite'
import commonConfig from './common'
import type { UserConfig } from 'vite'

export function defineApplicationConfig(options: UserConfig = {}) {
  return defineConfig(async ({ command }) => {
    const root = process.cwd()
    const isBuild = command === 'build'

    const pathResolve = (pathname: string) => resolve(root, '.', pathname)

    const applicationConfig: UserConfig = {
      esbuild: {
        drop: isBuild ? ['console', 'debugger'] : []
      },
      resolve: {
        alias: [
          {
            find: 'vue',
            replacement: 'vue/dist/vue.runtime.esm-bundler.js'
          },
          {
            find: /@\//,
            replacement: `${pathResolve('src')}/`
          }
        ]
      },
      build: {
        rollupOptions: {
          output: {
            chunkFileNames: 'js/[name]-[hash].js',
            entryFileNames: 'js/_entry-[name]-[hash].js',
            assetFileNames: '[ext]/[name]-[hash].[ext]',
            manualChunks: {
              vue: ['vue', 'pinia', 'vue-router']
            }
          }
        }
      }
    }

    const mergedConfig = mergeConfig(commonConfig, applicationConfig)

    return mergeConfig(mergedConfig, options)
  })
}
