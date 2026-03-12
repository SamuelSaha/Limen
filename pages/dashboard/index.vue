<script setup lang="ts">
definePageMeta({ middleware: "auth" });
</script>

<template>
  <div class="mx-auto max-w-4xl px-6 py-12">
    <h1 class="text-2xl font-bold">Dashboard</h1>

    <div class="mt-8 grid gap-6 sm:grid-cols-2">
      <NuxtLink
        to="/dashboard/listings"
        class="rounded-lg border border-stone-200 bg-white p-6 hover:border-stone-400"
      >
        <h2 class="font-semibold">My listings</h2>
        <p class="mt-1 text-sm text-stone-500">
          Manage your host and travel listings.
        </p>
      </NuxtLink>

      <NuxtLink
        to="/dashboard/matches"
        class="rounded-lg border border-stone-200 bg-white p-6 hover:border-stone-400"
      >
        <h2 class="font-semibold">My matches</h2>
        <p class="mt-1 text-sm text-stone-500">
          View proposals and active matches.
        </p>
      </NuxtLink>

      <NuxtLink
        to="/dashboard/profile"
        class="rounded-lg border border-stone-200 bg-white p-6 hover:border-stone-400"
      >
        <h2 class="font-semibold">Profile & verification</h2>
        <p class="mt-1 text-sm text-stone-500">
          Complete your profile and get verified.
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
