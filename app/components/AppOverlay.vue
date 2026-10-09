<!-- bottom drawer on mobile and modal from tablet up -->
<!-- props that are shared between drawer and modal components can be taken by this component -->
<!-- open state lives here so overlay converts instead of closing when viewport crosses breakpoints  -->
<!-- content remounts on the swap so keep its state in the parent -->
<!-- nested overlays supported -->
<template>
  <component
    :is="isMobile ? UDrawer : UModal"
    v-model:open="open"
    close
    v-bind="isMobile && insideDrawer ? { nested: true, ...$attrs } : $attrs"
  >
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </component>
</template>

<script setup lang="ts">
import { UDrawer, UModal } from "#components";

defineOptions({ inheritAttrs: false });

const open = defineModel<boolean>("open", { default: false });
const isMobile = useIsMobile();

// a drawer inside a drawer has to be marked nested for them to stack
// provide tells overlay on the inside it is a drawer whilst inject asks the parent
const insideDrawer = inject("appOverlayDrawer", ref(false));
provide("appOverlayDrawer", isMobile);

// on mobile the device back gesture closes the drawer instead of leaving the page
useBackGesture(
  computed(() => open.value && isMobile.value),
  () => (open.value = false),
);
</script>
