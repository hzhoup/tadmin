<template>
  <e-hover-container class="w-10" :content="getContent">
    <el-icon size="24" @click="appStore.toggleDark()">
      <icon-mdi-weather-night v-if="appStore.isDark" />
      <icon-mdi-weather-sunny v-else />
    </el-icon>
  </e-hover-container>
</template>

<script setup lang="ts">
import { useAppStore } from '@eadmin/store'
import { EHoverContainer } from '../hover-container'

defineOptions({ name: 'EToggleMode' })

const { t } = useI18n()
const appStore = useAppStore()

const getContent = computed(() => {
  return appStore.isDark ? t('dark') : t('light')
})
</script>

<i18n lang="yaml">
zh-cn:
  dark: 深色模式
  light: 浅色模式
en:
  dark: Dark Mode
  light: Light Mode
</i18n>
