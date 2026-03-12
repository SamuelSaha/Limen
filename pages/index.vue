<script setup lang="ts">
useSeoMeta({
  title: "LIMEN — Housing options for uncertain travelers",
  description:
    "Secure flexible accommodation through human-verified matches. Pay a small coordination fee to keep your options open.",
});
</script>

<template>
  <div class="mx-auto max-w-3xl px-6 py-24 text-center">
    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
      Keep your travel plans open.
    </h1>
    <p class="mt-6 text-lg text-stone-600">
      LIMEN matches uncertain travelers with flexible hosts. No rigid bookings.
      No cancellation penalties. Just human-verified, flexible stays.
    </p>

    <div class="mt-12 flex justify-center gap-4">
      <NuxtLink
        to="/listings?intent=travel"
        class="rounded-lg bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-stone-800"
      >
        I want to travel
      </NuxtLink>
      <NuxtLink
        to="/listings?intent=host"
        class="rounded-lg border border-stone-300 px-6 py-3 text-sm font-medium hover:bg-stone-100"
      >
        I want to host
      </NuxtLink>
    </div>

    <!-- Trust signals -->
    <div class="mt-20 grid grid-cols-3 gap-8 text-left">
      <div>
        <h3 class="font-semibold">Verified humans</h3>
        <p class="mt-1 text-sm text-stone-500">
          LinkedIn + ID verification. No anonymous guests.
        </p>
      </div>
      <div>
        <h3 class="font-semibold">Flexible dates</h3>
        <p class="mt-1 text-sm text-stone-500">
          ±3 to ±7 day windows. Plans change — your housing adapts.
        </p>
      </div>
      <div>
        <h3 class="font-semibold">Fair coordination fee</h3>
        <p class="mt-1 text-sm text-stone-500">
          €50–€100 to match, verify, and coordinate. No hidden charges.
        </p>
      </div>
    </div>
  </div>
</template>
