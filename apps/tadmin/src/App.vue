<template>
  <e-config-provider>
    <router-view />
  </e-config-provider>
</template>

<script setup lang="ts">
onMounted(() => {
  fetch('/api/user/test').then((res) => {
    console.log(res)
  })
})
</script>
