<script setup lang="ts">
const { el: ctaEl, isVisible: ctaVisible } = useReveal({ threshold: 0.1 });
</script>

<template>
  <section id="cta" class="bg-dark py-24 px-6 md:px-[60px] lg:px-[120px]">
    <div
      ref="ctaEl"
      class="reveal mx-auto flex max-w-2xl flex-col items-center text-center"
      :class="{ visible: ctaVisible }"
    >
      <!-- Headline -->
      <h2 class="text-4xl font-bold leading-tight text-ink-inverse sm:text-5xl">
        Ready to find your perfect match?
      </h2>

      <!-- Subheadline -->
      <p class="mt-5 max-w-lg text-lg leading-relaxed text-ink-inverse-secondary">
        Tell us where you want to go. We'll handle the rest &mdash; personally.
      </p>

      <!-- CTA Button -->
      <a
        href="#"
        class="mt-10 inline-flex items-center gap-2.5 rounded-button bg-limen px-10 py-4 text-lg font-semibold text-white shadow-hero transition-all hover:bg-limen-dark hover:shadow-card-hover"
      >
        Submit my intent
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>

      <!-- Disclaimer -->
      <p class="mt-5 text-sm text-ink-inverse-secondary">
        Takes 2 minutes &middot; No commitment &middot; Refund policy: full credit if match falls through
      </p>
    </div>
  </section>
</template>
