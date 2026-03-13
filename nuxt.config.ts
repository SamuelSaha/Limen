import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",

  modules: [
    "@nuxt/fonts",
    "@sentry/nuxt/module",
    "@nuxt/eslint",
  ],

  fonts: {
    families: [
      {
        name: "Outfit",
        weights: [300, 400, 500, 600, 700, 800],
        provider: "google",
      },
    ],
    defaults: {
      preload: true,
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  ssr: true,

  routeRules: {
    "/dashboard/**": { ssr: false },
  },

  runtimeConfig: {
    databaseUrl: "",
    stripeSecretKey: "",
    stripeWebhookSecret: "",
    resendApiKey: "",
    r2AccessKeyId: "",
    r2SecretAccessKey: "",
    r2Bucket: "",
    r2Endpoint: "",
    betterAuthSecret: "",

    public: {
      appUrl: "http://localhost:3000",
      stripePublishableKey: "",
    },
  },

  nitro: {
    experimental: {
      websocket: true,
    },
  },

  typescript: {
    strict: true,
  },

  devtools: { enabled: true },
});
