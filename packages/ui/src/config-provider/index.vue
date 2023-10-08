<template>
  <el-config-provider :locale="getElLocale">
    <div v-loading.fullscreen.lock="appStore.pageLoading" class="h-full">
      <slot />
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useLocale } from '@eadmin/locale'
import { useAppStore } from '@eadmin/store'

defineOptions({ name: 'EConfigProvider' })

const appStore = useAppStore()
const { getElLocale } = useLocale()
</script>
