<template>
  <p class="font-semibold">{{ appName }}</p>
</template>

<script setup lang="ts">
const { appName } = useAppConfig();
</script>
