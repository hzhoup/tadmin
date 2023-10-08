<template>
  <e-hover-container class="w-10">
    <el-dropdown @command="changeLocale">
      <el-icon size="24">
        <icon-mdi-web />
      </el-icon>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="option in localeOptions" :key="option.value" :command="option.value">
            {{ option.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </e-hover-container>
</template>

<script setup lang="ts">
import { localeOptions, useLocale } from '@eadmin/locale'
import { EHoverContainer } from '../hover-container'

defineOptions({ name: 'EToggleLang' })

const { changeLocale } = useLocale()
</script>
