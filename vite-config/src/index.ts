import { resolve } from 'node:path'
import { defineConfig, loadEnv, mergeConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import commonConfig from './common'
import type { UserConfig } from 'vite'

export function defineApplicationConfig(options: UserConfig = {}) {
  return defineConfig(async ({ command, mode }) => {
    const root = process.cwd()
    const isBuild = command === 'build'
    const { VITE_USE_MOCK } = loadEnv(mode, root)

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
      },
      plugins: [
        viteMockServe({
          ignore: /^_/,
          mockPath: 'mock',
          enable: VITE_USE_MOCK === 'true'
        })
      ]
    }

    const mergedConfig = mergeConfig(commonConfig, applicationConfig)

    return mergeConfig(mergedConfig, options)
  })
}
