<script setup lang="ts">
interface Listing {
  id: string;
  intentType: "host" | "travel";
  city: string;
  country: string;
  dateFrom: string;
  dateTo: string;
  flexibilityDays: number;
  description?: string;
}

defineProps<{ listing: Listing }>();

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", {
    month: "short",
    day: "numeric",
  });
}
</script>

<template>
  <div class="rounded-lg border border-stone-200 bg-white p-5">
    <div class="flex items-start justify-between">
      <div>
        <span
          class="inline-block rounded-full px-2 py-0.5 text-xs font-medium"
          :class="
            listing.intentType === 'host'
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-blue-50 text-blue-700'
          "
        >
          {{ listing.intentType === "host" ? "Host" : "Traveler" }}
        </span>
        <h3 class="mt-2 font-semibold">
          {{ listing.city }}, {{ listing.country }}
        </h3>
      </div>
      <span class="text-sm text-stone-400">
        ±{{ listing.flexibilityDays }}d
      </span>
    </div>

    <p class="mt-1 text-sm text-stone-500">
      {{ formatDate(listing.dateFrom) }} — {{ formatDate(listing.dateTo) }}
    </p>

    <p v-if="listing.description" class="mt-3 text-sm text-stone-600">
      {{ listing.description }}
    </p>
  </div>
</template>
