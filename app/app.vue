<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
const route = useRoute();
const { appName } = useAppConfig();

useSeoMeta({
  title: () => route.meta.title as string,
  titleTemplate: (title) => (title ? `${title} - ${appName}` : appName),
});
</script>
