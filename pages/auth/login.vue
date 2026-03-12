<script setup lang="ts">
useSeoMeta({ title: "Sign in — LIMEN" });
</script>

<template>
  <div class="mx-auto max-w-sm px-6 py-24">
    <h1 class="text-2xl font-bold">Sign in</h1>
    <p class="mt-2 text-sm text-stone-500">
      Sign in to manage your listings and matches.
    </p>

    <!-- Auth form placeholder — Better Auth integration -->
    <form class="mt-8 space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          class="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium">Password</label>
        <input
          id="password"
          type="password"
          class="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
        />
      </div>
      <button
        type="submit"
        class="w-full rounded-lg bg-stone-900 py-2.5 text-sm font-medium text-white hover:bg-stone-800"
      >
        Sign in
      </button>
    </form>

    <p class="mt-6 text-center text-sm text-stone-500">
      No account?
      <NuxtLink to="/auth/register" class="text-stone-900 underline">
        Create one
      </NuxtLink>
    </p>
  </div>
</template>
