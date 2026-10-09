<template>
  <UDashboardGroup
    unit="rem"
    :persistent="false"
    class="safe-padding flex-col-reverse tablet:flex-col laptop:flex-row"
  >
    <!-- bottom/top nav for small-med viewports -->
    <AppNav :items="navItems" class="laptop:hidden" />

    <!-- side nav for laptop and larger -->
    <UDashboardSidebar :toggle="false">
      <template #header>
        <AppBrand />
      </template>

      <AppNavMenu :items="navItems" orientation="vertical" />
    </UDashboardSidebar>

    <UDashboardPanel>
      <!-- header isnt visible for small-med viewports -->
      <template #header>
        <UDashboardNavbar
          :title="route.meta.title as string"
          :toggle="false"
          class="hidden laptop:flex"
        />
      </template>

      <template #body>
        <slot />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const navItems: NavigationMenuItem[] = [
  { label: "Home", to: "/", icon: "i-ph-house", activeIcon: "i-ph-house-fill" },
];
</script>
