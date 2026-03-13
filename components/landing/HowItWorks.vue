<script setup lang="ts">
const step1 = useReveal({ threshold: 0.15 });
const step2 = useReveal({ threshold: 0.15 });
const step3 = useReveal({ threshold: 0.15 });
const step4 = useReveal({ threshold: 0.15 });

const steps = [
  {
    number: "01",
    tag: "INTENT",
    title: "Tell us where and when",
    description:
      "City, dates, flexibility window, budget. Two-minute form. We ask only what matters for finding your match.",
    photo: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=700&q=85",
    photoAlt: "Aerial view of European city streets",
    reveal: step1,
  },
  {
    number: "02",
    tag: "VERIFY",
    title: "Prove you are who you say",
    description:
      "LinkedIn profile, government ID, and a quick WhatsApp call. Every member passes the same bar. No exceptions.",
    photo: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=700&q=85",
    photoAlt: "Person at laptop completing verification",
    reveal: step2,
  },
  {
    number: "03",
    tag: "MATCH",
    title: "A human finds your fit",
    description:
      "Sam personally reviews every request. Not an algorithm — a person who's lived in these cities, knows the landlords, and matches based on overlap, trust, and vibe.",
    photo: "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?w=700&q=85",
    photoAlt: "WhatsApp conversation on phone — the match notification",
    reveal: step3,
  },
  {
    number: "04",
    tag: "LOCK",
    title: "Pay, lock, and meet your host",
    description:
      "Stripe handles payment. DocuSign handles the lease. We handle the introduction — over WhatsApp, so it feels like a friend connecting you, not a booking engine.",
    photo: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=85",
    photoAlt: "Beautiful sunlit European apartment — your new home",
    reveal: step4,
  },
];
</script>

<template>
  <section
    id="how-it-works"
    class="bg-card py-20 px-6 md:px-12 lg:px-[120px]"
  >
    <div class="mx-auto max-w-[1080px]">
      <!-- Header -->
      <div class="mb-20 text-center">
        <span class="section-label">HOW IT WORKS</span>
        <h2 class="mt-4 text-4xl font-bold tracking-tight text-ink">
          Four steps. Two minutes. One conversation.
        </h2>
      </div>

      <!-- Steps -->
      <div class="flex flex-col gap-24">
        <div
          v-for="(step, index) in steps"
          :key="step.number"
          :ref="(el) => { if (el) step.reveal.el.value = (el as HTMLElement) }"
          class="reveal flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16"
          :class="[
            { visible: step.reveal.isVisible.value },
            index % 2 === 1 ? 'lg:flex-row-reverse' : '',
          ]"
        >
          <!-- Text block -->
          <div class="flex-1">
            <!-- Step number row -->
            <div class="mb-5 flex items-center gap-3">
              <span class="text-lg font-bold text-limen">{{ step.number }}</span>
              <div class="h-px w-10 bg-edge" />
              <span class="text-xs font-semibold uppercase tracking-wide text-ink-tertiary">
                {{ step.tag }}
              </span>
            </div>

            <h3 class="text-2xl font-semibold text-ink">{{ step.title }}</h3>
            <p class="mt-3 text-base leading-relaxed text-ink-secondary">
              {{ step.description }}
            </p>
          </div>

          <!-- Photo -->
          <div class="flex-1">
            <div class="relative overflow-hidden rounded-hero shadow-hero">
              <img
                :src="step.photo"
                :alt="step.photoAlt"
                class="h-[280px] w-full object-cover lg:h-[340px]"
                loading="lazy"
              />
              <!-- Step number badge overlaid on image -->
              <div class="absolute top-4 left-4 flex items-center gap-2 rounded-pill bg-dark/70 px-3.5 py-1.5 backdrop-blur-sm">
                <span class="text-xs font-bold text-limen">{{ step.number }}</span>
                <span class="text-xs font-medium uppercase tracking-wider text-ink-inverse-secondary">{{ step.tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
