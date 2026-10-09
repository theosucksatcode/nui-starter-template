<template>
  <UDashboardGroup
    unit="rem"
    :persistent="false"
    class="safe-padding gap-(--app-gap) flex-col-reverse tablet:flex-col laptop:flex-row"
  >
    <!-- bottom/top nav for small-med viewports -->
    <AppNav class="laptop:hidden bg-sky-400" />

    <!-- side nav for laptop and larger -->
    <UDashboardSidebar
      :default-size="16"
      :toggle="false"
      class="bg-amber-400"
    />

    <UDashboardPanel :ui="{ body: 'bg-emerald-400' }">
      <!-- header isnt visible for small-med viewports -->
      <template #header>
        <UDashboardNavbar
          :title="route.meta.title as string"
          :toggle="false"
          class="hidden laptop:flex bg-violet-400"
        />
      </template>

      <template #body>
        <slot />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

<script setup lang="ts">
const route = useRoute();

useSeoMeta({
  title: route.meta.title as string,
});
</script>
