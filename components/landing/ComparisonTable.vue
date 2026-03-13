<script setup lang="ts">
const { el: headerEl, isVisible: headerVisible } = useReveal();
const { el: tableEl, isVisible: tableVisible } = useReveal({ threshold: 0.1 });

interface ComparisonRow {
  feature: string;
  traditional: string;
  limen: string;
}

const rows: ComparisonRow[] = [
  {
    feature: 'Discovery',
    traditional: 'Scroll hundreds of listings',
    limen: 'One curated match, personally vetted',
  },
  {
    feature: 'Trust',
    traditional: 'Reviews from strangers',
    limen: 'ID-verified hosts & guests, trust scoring',
  },
  {
    feature: 'Pricing',
    traditional: 'Nightly rate + service fees + cleaning',
    limen: 'Flat matching fee, transparent pricing',
  },
  {
    feature: 'Support',
    traditional: 'Chatbot and ticket queue',
    limen: 'WhatsApp concierge, human response',
  },
  {
    feature: 'Flexibility',
    traditional: 'Strict cancellation policies',
    limen: 'Match credits if plans change',
  },
];
</script>

<template>
  <section class="bg-page py-[100px] px-6 md:px-[60px] lg:px-[120px]">
    <!-- Header -->
    <div
      ref="headerEl"
      class="reveal mx-auto mb-14 max-w-3xl text-center"
      :class="{ visible: headerVisible }"
    >
      <p class="section-label mb-4">WHY LIMEN</p>
      <h2 class="text-4xl font-semibold text-ink">Skip the guesswork</h2>
    </div>

    <!-- Comparison Table -->
    <div
      ref="tableEl"
      class="reveal mx-auto max-w-4xl overflow-hidden rounded-card bg-card shadow-comparison"
      :class="{ visible: tableVisible }"
    >
      <!-- Desktop table -->
      <div class="hidden md:block">
        <table class="w-full">
          <!-- Header -->
          <thead>
            <tr>
              <th class="w-[140px] border-b border-edge p-5 text-left text-sm font-semibold text-ink-tertiary">
                Feature
              </th>
              <th class="border-b border-edge bg-muted p-5 text-left text-sm font-semibold text-ink-secondary">
                Traditional platforms
              </th>
              <th class="border-b border-edge bg-limen-light p-5 text-left text-sm font-semibold text-limen">
                LIMEN
              </th>
            </tr>
          </thead>
          <!-- Body -->
          <tbody>
            <tr
              v-for="(row, index) in rows"
              :key="row.feature"
              :class="index % 2 === 1 ? 'bg-elevated' : ''"
            >
              <td class="border-b border-edge/50 p-5 text-sm font-medium text-ink">
                {{ row.feature }}
              </td>
              <td class="border-b border-edge/50 p-5">
                <div class="flex items-start gap-2.5">
                  <!-- X icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mt-0.5 shrink-0 text-coral"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  <span class="text-sm text-ink-secondary">{{ row.traditional }}</span>
                </div>
              </td>
              <td class="border-b border-edge/50 p-5">
                <div class="flex items-start gap-2.5">
                  <!-- Check icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mt-0.5 shrink-0 text-limen"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span class="text-sm font-medium text-ink">{{ row.limen }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile stacked cards -->
      <div class="flex flex-col divide-y divide-edge md:hidden">
        <div
          v-for="(row, index) in rows"
          :key="`mobile-${row.feature}`"
          class="p-5"
          :class="index % 2 === 1 ? 'bg-elevated' : ''"
        >
          <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-tertiary">
            {{ row.feature }}
          </p>
          <!-- Traditional -->
          <div class="mb-2 flex items-start gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mt-0.5 shrink-0 text-coral"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span class="text-sm text-ink-secondary">{{ row.traditional }}</span>
          </div>
          <!-- LIMEN -->
          <div class="flex items-start gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mt-0.5 shrink-0 text-limen"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span class="text-sm font-medium text-ink">{{ row.limen }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
