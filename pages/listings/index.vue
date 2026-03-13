<script setup lang="ts">
const route = useRoute();
const intent = computed(() => (route.query.intent as string) || undefined);

const { data: listings, status } = useFetch("/api/listings", {
  query: { intent },
});
</script>

<template>
  <div class="mx-auto max-w-4xl px-6 py-12">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold text-ink">
        {{ intent === "host" ? "Available hosts" : "Travelers looking" }}
      </h1>
      <NuxtLink
        to="/dashboard/listings/new"
        class="rounded-button bg-limen px-5 py-2.5 text-sm font-semibold text-ink-inverse
               transition-all duration-150 hover:bg-limen-dark active:scale-[0.98]"
      >
        Create listing
      </NuxtLink>
    </div>

    <!-- Loading -->
    <div v-if="status === 'pending'" class="mt-16 flex flex-col items-center gap-3 text-center">
      <div class="h-8 w-8 animate-spin rounded-full border-2 border-edge border-t-limen" />
      <p class="text-sm text-ink-tertiary">Finding listings…</p>
    </div>

    <!-- Empty state -->
    <div v-else-if="!listings?.length" class="mt-16 flex flex-col items-center gap-4 text-center">
      <div class="flex h-16 w-16 items-center justify-center rounded-full bg-limen-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-limen">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        </svg>
      </div>
      <div>
        <p class="font-semibold text-ink">No listings yet</p>
        <p class="mt-1 text-sm text-ink-secondary">Be the first to create one.</p>
      </div>
      <NuxtLink
        to="/dashboard/listings/new"
        class="mt-2 rounded-button bg-limen px-6 py-2.5 text-sm font-semibold text-ink-inverse
               transition-all duration-150 hover:bg-limen-dark"
      >
        Create a listing
      </NuxtLink>
    </div>

    <!-- List -->
    <div v-else class="mt-8 space-y-4">
      <ListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
      />
    </div>
  </div>
</template>
