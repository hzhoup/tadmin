<template>
  <t-config-provider :global-config="getTLocale">
    <div class="h-full">
      <slot />
    </div>
  </t-config-provider>
</template>

<script setup lang="ts">
import { useLocale } from '@tadmin/locale'
import { subscribeStore } from '@tadmin/store'

defineOptions({ name: 'TaConfigProvider' })

const { getTLocale } = useLocale()

subscribeStore()
</script>
