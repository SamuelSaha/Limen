<script setup lang="ts">
const { el: headerEl, isVisible: headerVisible } = useReveal();
const { el: gridEl, isVisible: gridVisible } = useReveal({ threshold: 0.1 });

const features = [
  {
    icon: 'search',
    title: 'Personal matching',
    description:
      'A human reviews your request and finds options that fit your life, not just your dates.',
  },
  {
    icon: 'calendar-check',
    title: 'Flexible holds',
    description:
      'Lock options without committing. Change dates, extend stays, or cancel — no penalties.',
  },
  {
    icon: 'shield-check',
    title: 'Verified hosts',
    description:
      'Every landlord is personally vetted. ID checks, property visits, and reference calls — before you arrive.',
  },
  {
    icon: 'file-check',
    title: 'Digital lease signing',
    description:
      'DocuSign-powered contracts in your language. No cash deposits, no shady wire transfers.',
  },
  {
    icon: 'message-circle',
    title: 'WhatsApp introductions',
    description:
      'Meet your host before you arrive. A group chat that feels like a friend connecting you, not a support ticket.',
  },
  {
    icon: 'credit-card',
    title: 'Stripe-secured payments',
    description:
      'Pay through Stripe. Receipts, refund protection, and full transparency. No hidden platform fees.',
  },
] as const;
</script>

<template>
  <section class="bg-page py-[100px] px-6 md:px-[60px] lg:px-[120px]">
    <!-- Header -->
    <div
      ref="headerEl"
      class="reveal mx-auto mb-14 max-w-3xl text-center"
      :class="{ visible: headerVisible }"
    >
      <p class="section-label mb-4">WHAT YOU GET</p>
      <h2 class="text-4xl font-semibold text-ink">
        Everything included in the coordination fee
      </h2>
    </div>

    <!-- Grid -->
    <div
      ref="gridEl"
      class="reveal-stagger mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      :class="{ visible: gridVisible }"
    >
      <div
        v-for="feature in features"
        :key="feature.icon"
        class="flex flex-col gap-3 rounded-card border border-edge bg-card p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
      >
        <!-- Icon -->
        <div class="text-limen">
          <!-- Search / Magnifying glass -->
          <svg
            v-if="feature.icon === 'search'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>

          <!-- Calendar Check -->
          <svg
            v-else-if="feature.icon === 'calendar-check'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="m9 16 2 2 4-4" />
          </svg>

          <!-- Shield Check -->
          <svg
            v-else-if="feature.icon === 'shield-check'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>

          <!-- File Check -->
          <svg
            v-else-if="feature.icon === 'file-check'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="m9 15 2 2 4-4" />
          </svg>

          <!-- Message Circle -->
          <svg
            v-else-if="feature.icon === 'message-circle'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
          </svg>

          <!-- Credit Card -->
          <svg
            v-else-if="feature.icon === 'credit-card'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>
        </div>

        <!-- Text -->
        <h3 class="text-[17px] font-semibold text-ink">{{ feature.title }}</h3>
        <p class="text-sm leading-relaxed text-ink-secondary">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </section>
</template>
