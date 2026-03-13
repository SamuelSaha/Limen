<script setup lang="ts">
useSeoMeta({ title: "Sign in — LIMEN" });
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-page px-6 py-16">
    <div class="w-full max-w-sm">
      <!-- Brand -->
      <NuxtLink to="/" class="mb-8 block text-center">
        <span class="text-2xl font-bold tracking-tight text-ink">LIMEN</span>
      </NuxtLink>

      <!-- Card -->
      <div class="rounded-card bg-card p-8 shadow-hero">
        <h1 class="text-xl font-semibold text-ink">Welcome back</h1>
        <p class="mt-1 text-sm text-ink-secondary">
          Sign in to manage your listings and matches.
        </p>

        <!-- Form -->
        <form class="mt-6 space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              type="email"
              class="mt-1.5 w-full rounded-button border border-edge bg-elevated px-4 py-2.5 text-sm text-ink placeholder:text-ink-tertiary
                     transition-colors focus:border-limen focus:outline-none focus:ring-2 focus:ring-limen/20"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium text-ink">
                Password
              </label>
              <a href="#" class="text-xs text-limen hover:text-limen-dark transition-colors">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              class="mt-1.5 w-full rounded-button border border-edge bg-elevated px-4 py-2.5 text-sm text-ink
                     transition-colors focus:border-limen focus:outline-none focus:ring-2 focus:ring-limen/20"
            />
          </div>
          <button
            type="submit"
            class="mt-2 w-full rounded-button bg-limen py-3 text-sm font-semibold text-ink-inverse shadow-card
                   transition-all duration-150 hover:bg-limen-dark hover:shadow-card-hover active:scale-[0.98]"
          >
            Sign in
          </button>
        </form>

        <!-- Divider -->
        <div class="my-6 flex items-center gap-3">
          <div class="h-px flex-1 bg-edge" />
          <span class="text-xs text-ink-tertiary">or</span>
          <div class="h-px flex-1 bg-edge" />
        </div>

        <p class="text-center text-sm text-ink-secondary">
          No account?
          <NuxtLink to="/auth/register" class="font-medium text-limen hover:text-limen-dark transition-colors">
            Create one
          </NuxtLink>
        </p>
      </div>

      <!-- Back -->
      <p class="mt-6 text-center text-xs text-ink-tertiary">
        <NuxtLink to="/" class="hover:text-ink-secondary transition-colors">
          ← Back to LIMEN
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
