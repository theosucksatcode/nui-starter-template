# NUI Starter Template

A starting point for apps built with Nuxt 4, Nuxt UI 4, Tailwind 4 and Phosphor icons. It gives you a responsive app shell and a drawer/modal overlay and nothing else, so no auth, database or state library is chosen for you.

## Starting a new app

1. Copy this template
2. `pnpm install`, then `pnpm dev`
3. Rename it for your app:
   - `name` in `package.json`
   - `appName` in `app/app.config.ts` (shown in the sidebar and the tab title)
   - the sample Home item in `navItems` in `app/layouts/default.vue`
4. Replace this README with your own

`public/robots.txt` blocks all crawlers. Change it when the app should be public.

## Add a page and a nav item

1. Create `app/pages/example.vue` and give it a title:

   ```vue
   <script setup lang="ts">
   definePageMeta({ title: "Example" });
   </script>
   ```

2. Add it to `navItems` in `app/layouts/default.vue`:

   ```ts
   { label: "Example", to: "/example", icon: "i-ph-star", activeIcon: "i-ph-star-fill" }
   ```

That is all. The item shows up in all three navs and its icon switches to `activeIcon` while the page is active.

Pages that should not have the app shell (login, register) use `definePageMeta({ layout: "centered" })`.

## What's inside

- **Layout** (`app/layouts/default.vue`): bottom nav on mobile, top nav on tablet, sidebar and top bar on laptop and up
- **Breakpoints**: `tablet` and `laptop` are named once in `app/assets/css/main.css`. `laptop` must stay equal to Tailwind's `lg` because Nuxt UI's sidebar switches there
- **Overlays** (`AppOverlay`): a bottom drawer on mobile and a modal from tablet up. On mobile the back gesture closes the drawer instead of leaving the page. They can be nested
- **Icons**: Phosphor. Nuxt UI's own icons are mapped to Phosphor under `ui.icons` in `app/app.config.ts`
- **Theming**: colours, radius and component defaults live in `app/app.config.ts` and the variables in `app/assets/css/main.css`. Light and dark follow the system

## Using `AppOverlay`

It takes the same props and slots as Nuxt UI's `UDrawer` and `UModal`:

```vue
<AppOverlay title="Edit profile">
  <UButton label="Edit" />

  <template #body>
    ...
  </template>
</AppOverlay>
```

Two things to know:

- The content is recreated when the screen crosses the mobile/tablet breakpoint, so keep form state in the parent
- A plain `UModal` (for example a short confirmation) does not react to the back gesture

## Conventions

- One border line between neighbouring pieces, never two
- Page titles come from `definePageMeta({ title })`
- Hover styles only apply on devices that can hover (Tailwind does this for `hover:`)
