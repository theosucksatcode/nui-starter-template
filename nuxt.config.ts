export default defineNuxtConfig({
  compatibilityDate: "2026-10-08", // template creation date
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1, viewport-fit=cover", // app draws under notch and gives safe area insets a value
    },
  },
});
