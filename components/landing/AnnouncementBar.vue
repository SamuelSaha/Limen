<script setup lang="ts">
const dismissed = ref(false);

onMounted(() => {
  dismissed.value = localStorage.getItem("limen-announcement-dismissed") === "1";
});

function dismiss() {
  dismissed.value = true;
  localStorage.setItem("limen-announcement-dismissed", "1");
}
</script>

<template>
  <div
    v-if="!dismissed"
    class="relative bg-limen-light py-2.5 text-center text-sm font-medium text-limen-dark"
  >
    <span class="inline-flex items-center gap-2">
      <span class="inline-block h-1.5 w-1.5 rounded-full bg-limen pulse-soft" />
      Now matching in Lisbon · Berlin · Barcelona
    </span>
    <button
      class="absolute right-4 top-1/2 -translate-y-1/2 text-limen/50 transition-colors hover:text-limen"
      aria-label="Dismiss"
      @click="dismiss"
    >
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>
