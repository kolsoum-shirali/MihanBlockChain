// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/MihanBlockChain/',
    buildAssetsDir: 'assets'
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/scss/main.scss"],
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
