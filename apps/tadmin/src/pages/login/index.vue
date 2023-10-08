<template>
  <div class="px-4 relative">
    <el-space class="h-12 absolute top-0 right-0">
      <e-toggle-lang />
      <e-toggle-mode />
    </el-space>

    <main>
      <login-form />
    </main>
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
