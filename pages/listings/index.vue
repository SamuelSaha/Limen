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
      <h1 class="text-2xl font-bold">
        {{ intent === "host" ? "Available hosts" : "Travelers looking" }}
      </h1>
      <NuxtLink
        to="/dashboard/listings/new"
        class="rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
      >
        Create listing
      </NuxtLink>
    </div>

    <div v-if="status === 'pending'" class="mt-12 text-center text-stone-400">
      Loading...
    </div>

    <div v-else-if="!listings?.length" class="mt-12 text-center text-stone-400">
      No listings yet. Be the first.
    </div>

    <div v-else class="mt-8 space-y-4">
      <ListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
      />
    </div>
  </div>
</template>
