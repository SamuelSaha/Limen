<script setup lang="ts">
const { el: headerEl, isVisible: headerVisible } = useReveal();
const { el: gridEl, isVisible: gridVisible } = useReveal({ threshold: 0.1 });

const testimonials = [
  {
    quote:
      "Found my Lisbon apartment in under 18 hours. Sam matched me with a landlord who'd hosted four digital nomads before — no awkward 'are you reliable' interviews. Just a WhatsApp call and we clicked.",
    name: "Margot D.",
    role: "Product Designer",
    location: "Paris → Lisbon",
    initials: "MD",
    gradient: "from-limen to-limen-dark",
  },
  {
    quote:
      "My project end date was the 12th 'or later'. LIMEN held me a room in Berlin with ±5 days flexibility. Conference started the 14th — zero stress. Airbnb would have cost me two bookings and €300 extra.",
    name: "Felix K.",
    role: "Freelance Developer",
    location: "Amsterdam → Berlin",
    initials: "FK",
    gradient: "from-coral to-coral-dark",
  },
  {
    quote:
      "Switching from Airbnb saved me €400 on fees for my three-month Barcelona research stay. But honestly — my host became a friend who showed me the real neighbourhood. That's not something an algorithm gives you.",
    name: "Camille R.",
    role: "PhD Researcher",
    location: "Lyon → Barcelona",
    initials: "CR",
    gradient: "from-warning to-[#C49238]",
  },
];
</script>

<template>
  <section class="bg-card py-[100px] px-6 md:px-[60px] lg:px-[120px]">
    <!-- Header -->
    <div
      ref="headerEl"
      class="reveal mx-auto mb-14 max-w-3xl text-center"
      :class="{ visible: headerVisible }"
    >
      <p class="section-label mb-4">WHAT MEMBERS SAY</p>
      <h2 class="text-4xl font-semibold text-ink">People who held their options open</h2>
    </div>

    <!-- Testimonial grid -->
    <div
      ref="gridEl"
      class="reveal-stagger mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
      :class="{ visible: gridVisible }"
    >
      <div
        v-for="t in testimonials"
        :key="t.name"
        class="flex flex-col gap-5 rounded-card border border-edge bg-elevated p-8 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
      >
        <!-- Quote marks -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="text-limen-light shrink-0"
        >
          <path d="M11.3 7.3C9.7 8.5 9 9.9 9 11v6H3v-6c0-2.3 1.2-4.6 3.5-6.3L11.3 7.3zM23.3 7.3C21.7 8.5 21 9.9 21 11v6h-6v-6c0-2.3 1.2-4.6 3.5-6.3L23.3 7.3z"/>
        </svg>

        <!-- Quote text -->
        <p class="flex-1 text-[15px] leading-relaxed text-ink-secondary">
          {{ t.quote }}
        </p>

        <!-- Author -->
        <div class="flex items-center gap-3 border-t border-edge pt-5">
          <!-- Avatar -->
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-ink-inverse"
            :class="t.gradient"
          >
            {{ t.initials }}
          </div>
          <!-- Info -->
          <div class="min-w-0">
            <p class="text-sm font-semibold text-ink">{{ t.name }}</p>
            <p class="text-xs text-ink-tertiary">{{ t.role }} · {{ t.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
