<script setup lang="ts">
const { el, isVisible } = useReveal();

const principles = [
  'Flexibility over rigidity',
  'People over platforms',
  'Trust over transactions',
  'Honesty over upsells',
];
</script>

<template>
  <section
    ref="el"
    class="reveal bg-dark py-[100px] px-6 md:px-[60px] lg:px-[120px]"
    :class="{ visible: isVisible }"
  >
    <div class="mx-auto flex max-w-[900px] flex-col items-center text-center">
      <!-- Label -->
      <p class="section-label mb-6">WHAT WE BELIEVE</p>

      <!-- Quote -->
      <blockquote
        class="mb-6 max-w-[900px] text-[24px] font-light leading-relaxed text-ink-inverse sm:text-[28px] md:text-[32px]"
      >
        &ldquo;We believe housing should work like the rest of your life: flexible,
        personal, and built on trust &mdash; not cancellation policies, hidden fees,
        and anonymous listings.&rdquo;
      </blockquote>

      <!-- Attribution -->
      <p class="mb-10 text-sm font-medium text-ink-inverse-secondary">
        &mdash; The founding principle behind every match we make
      </p>

      <!-- Principle pills -->
      <div class="flex flex-wrap items-center justify-center gap-3">
        <span
          v-for="principle in principles"
          :key="principle"
          class="rounded-pill border border-white/[0.09] bg-white/[0.07] px-5 py-2.5 text-sm font-medium text-ink-inverse-secondary"
        >
          {{ principle }}
        </span>
      </div>
    </div>
  </section>
</template>
