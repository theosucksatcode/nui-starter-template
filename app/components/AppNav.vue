<template>
  <div
    class="flex items-center h-16 shrink-0 px-4 sm:px-6 border-t border-default tablet:border-t-0 tablet:border-b pointer-coarse:min-h-11"
  >
    <AppNavMenu
      :items="items"
      variant="link"
      :ui="{
        root: 'flex-1 [&>div]:flex-1',
        list: 'w-full',
        item: 'flex-1 py-0',
        link: 'flex-col justify-center gap-1 px-0 text-xs',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

defineProps<{ items: NavigationMenuItem[] }>();
</script>
