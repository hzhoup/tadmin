<template>
  <div class="h-full">
    <template v-if="showTooltip">
      <el-tooltip :content="content">
        <div class="container">
          <slot />
        </div>
      </el-tooltip>
    </template>
    <template v-else>
      <div class="container">
        <slot />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'EHoverContainer' })

const props = defineProps<{
  content?: string
}>()

const showTooltip = computed(() => !!props.content)
</script>

<style scoped lang="scss">
.container {
  @apply flex items-center justify-center h-full cursor-pointer hover:bg-#f6f6f6 dark:hover:bg-#333;
}
</style>
