<script setup lang="ts">
const { el, isVisible } = useReveal({ threshold: 0.1 });
</script>

<template>
  <section
    ref="el"
    class="reveal grid grid-cols-1 md:grid-cols-2"
    :class="{ visible: isVisible }"
  >
    <!-- WITHOUT LIMEN — uses token instead of hardcoded hex -->
    <div class="bg-terracotta-bg px-8 py-14 sm:px-12 md:px-20">
      <p class="section-label mb-5 !text-coral-dark">WITHOUT LIMEN</p>

      <h2 class="mb-5 max-w-[500px] whitespace-pre-line text-3xl font-semibold leading-snug tracking-tight text-ink">
        You book rigid.
You pray your plans hold.
They don't. You lose €500.</h2>

      <p class="max-w-[500px] text-[15px] leading-relaxed text-ink-secondary">
        Traditional platforms punish flexibility. Cancel 48 hours early? Full charge.
        Shift your dates by a day? New booking, new price, new risk.
      </p>
    </div>

    <!-- WITH LIMEN — uses token instead of hardcoded hex -->
    <div class="bg-sage-bg px-8 py-14 sm:px-12 md:px-20">
      <p class="section-label mb-5 !text-limen-dark">WITH LIMEN</p>

      <h2 class="mb-5 max-w-[500px] whitespace-pre-line text-3xl font-semibold leading-snug tracking-tight text-ink">
        You hold options.
Your dates flex ±7 days.
You pay €50, not €500.</h2>

      <p class="max-w-[500px] text-[15px] leading-relaxed text-ink-secondary">
        LIMEN matches you with a verified host in your city. Plans change? Adjust your
        window. The coordination fee covers verification, legal protection, and a personal
        introduction.
      </p>
    </div>
  </section>
</template>
