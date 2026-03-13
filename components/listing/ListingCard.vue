<script setup lang="ts">
interface Listing {
  id: string;
  intentType: "host" | "travel";
  city: string;
  country: string;
  dateFrom: string;
  dateTo: string;
  flexibilityDays: number;
  description?: string | null;
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
  <div class="rounded-card border border-edge bg-card p-5 shadow-card transition-all duration-200 hover:shadow-card-hover">
    <div class="flex items-start justify-between">
      <div>
        <span
          class="inline-block rounded-pill px-2.5 py-1 text-xs font-semibold"
          :class="
            listing.intentType === 'host'
              ? 'bg-limen-light text-limen'
              : 'bg-muted text-ink-secondary'
          "
        >
          {{ listing.intentType === "host" ? "Host" : "Traveler" }}
        </span>
        <h3 class="mt-2 font-semibold text-ink">
          {{ listing.city }}, {{ listing.country }}
        </h3>
      </div>
      <span class="rounded-pill bg-muted px-2.5 py-1 text-xs font-medium text-ink-secondary">
        ±{{ listing.flexibilityDays }}d
      </span>
    </div>

    <p class="mt-1.5 text-sm text-ink-secondary">
      {{ formatDate(listing.dateFrom) }} — {{ formatDate(listing.dateTo) }}
    </p>

    <p v-if="listing.description" class="mt-3 text-sm leading-relaxed text-ink-secondary">
      {{ listing.description }}
    </p>
  </div>
</template>
