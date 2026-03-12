export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",

  modules: [
    "@nuxtjs/tailwindcss",
    "@sentry/nuxt/module",
    "@nuxt/eslint",
  ],

  // SSR for public pages (landing, listings), SPA-like for dashboard
  ssr: true,

  routeRules: {
    "/dashboard/**": { ssr: false },
  },

  runtimeConfig: {
    // Server-only (never exposed to client)
    databaseUrl: "",
    stripeSecretKey: "",
    stripeWebhookSecret: "",
    resendApiKey: "",
    r2AccessKeyId: "",
    r2SecretAccessKey: "",
    r2Bucket: "",
    r2Endpoint: "",
    betterAuthSecret: "",

    // Client-exposed
    public: {
      appUrl: "http://localhost:3000",
      stripePublishableKey: "",
    },
  },

  nitro: {
    // WebSocket support for real-time notifications (Phase 3+)
    experimental: {
      websocket: true,
    },
  },

  typescript: {
    strict: true,
  },

  devtools: { enabled: true },
});
