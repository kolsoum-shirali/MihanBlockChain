// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/MihanBlockChain/',
    buildAssetsDir: 'public'
  },
  devtools: { enabled: true },
  css: ["~/public/assets/css/main.css", "~/public/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt", "nuxt-quasar-ui"],
  quasar: {
    /* */
  },
});
