<template>
  <UNavigationMenu :items="items">
    <template #item-leading="{ item, active, ui }">
      <UIcon
        v-if="item.icon"
        :name="active && item.activeIcon ? item.activeIcon : item.icon"
        :class="ui.linkLeadingIcon({ active, disabled: !!item.disabled })"
      />
    </template>
  </UNavigationMenu>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

defineProps<{ items: NavigationMenuItem[] }>();
</script>
