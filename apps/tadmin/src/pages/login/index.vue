<template>
  <div class="h-screen px-4 flex flex-col items-center">
    <div class="h-12 w-full flex items-center justify-end">
      <e-toggle-lang />
      <e-toggle-mode />
    </div>

    <div class="w-full max-w-420px">
      <login-form />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from './modules/login-form.vue'
</script>

<style scoped lang="scss">
:deep(.el-space__item) {
  @apply h-full;
}
</style>

<route lang="yaml">
meta:
  ignoreAuth: true
  title:
    zh-cn: 登录
    en: Sign in
</route>
