<script setup lang="ts">
const { el: headerEl, isVisible: headerVisible } = useReveal();
const { el: cardsEl, isVisible: cardsVisible } = useReveal({ threshold: 0.1 });

interface PricingTier {
  badge: string;
  highlighted: boolean;
  price: string;
  description: string;
  features: string[];
  cta: string;
}

const tiers: PricingTier[] = [
  {
    badge: 'Solo Explorer',
    highlighted: false,
    price: '€50',
    description:
      'Single city, single stay. Perfect for remote workers testing a new base or students on semester abroad.',
    features: [
      '1 city, up to 3 housing options',
      'Personal matching & host vetting',
      'WhatsApp intro + lease signing',
      'Date flexibility up to \u00B17 days',
    ],
    cta: 'Submit My Intent',
  },
  {
    badge: 'Multi-City',
    highlighted: true,
    price: '€100',
    description:
      'Multiple cities, deciding between options. Ideal for couples weighing Barcelona vs. Lisbon or digital nomads planning a route.',
    features: [
      'Up to 3 cities, 3 options per city',
      'Everything in Solo, plus city comparison',
      'Extended flexibility up to \u00B114 days',
      'Priority matching & dedicated WhatsApp line',
    ],
    cta: 'Submit My Intent \u2014 Priority',
  },
];
</script>

<template>
  <section id="pricing" class="bg-page py-[100px] px-6 md:px-[60px] lg:px-[120px]">
    <!-- Header -->
    <div
      ref="headerEl"
      class="reveal mx-auto mb-14 max-w-3xl text-center"
      :class="{ visible: headerVisible }"
    >
      <p class="section-label mb-4">TRANSPARENT PRICING</p>
      <h2 class="text-[40px] font-semibold text-ink">One fee. No surprises.</h2>
      <p class="mx-auto mt-5 max-w-[600px] text-[17px] leading-relaxed text-ink-secondary">
        You pay the coordination fee once. Your rent goes directly to the landlord.
        We never touch it.
      </p>
    </div>

    <!-- Cards -->
    <div
      ref="cardsEl"
      class="reveal mx-auto flex max-w-[1000px] flex-col items-center justify-center gap-6 md:flex-row md:items-stretch"
      :class="{ visible: cardsVisible }"
    >
      <div
        v-for="tier in tiers"
        :key="tier.badge"
        class="flex w-full max-w-[480px] flex-col rounded-card bg-card p-10 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
        :class="
          tier.highlighted
            ? 'border-2 border-limen shadow-hero'
            : 'border border-edge shadow-card'
        "
      >
        <!-- Badge -->
        <span
          class="mb-6 inline-flex w-fit rounded-pill px-3.5 py-1.5 text-xs font-semibold"
          :class="
            tier.highlighted
              ? 'bg-limen-light text-limen'
              : 'bg-muted text-ink'
          "
        >
          {{ tier.badge }}
        </span>

        <!-- Price -->
        <div class="mb-4 flex items-baseline gap-1">
          <span class="text-5xl font-bold text-ink">{{ tier.price }}</span>
          <span class="text-lg text-ink-secondary">/match</span>
        </div>

        <!-- Description -->
        <p class="mb-8 text-sm leading-relaxed text-ink-secondary">
          {{ tier.description }}
        </p>

        <!-- Feature list -->
        <ul class="mb-10 flex flex-col gap-3.5">
          <li
            v-for="item in tier.features"
            :key="item"
            class="flex items-start gap-2.5 text-sm text-ink"
          >
            <!-- Green check icon -->
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
            <span>{{ item }}</span>
          </li>
        </ul>

        <!-- CTA -->
        <a
          href="#cta"
          class="mt-auto block w-full rounded-button bg-limen py-3.5 text-center font-semibold text-ink-inverse transition-colors hover:bg-limen-dark"
        >
          {{ tier.cta }}
        </a>
      </div>
    </div>
  </section>
</template>
