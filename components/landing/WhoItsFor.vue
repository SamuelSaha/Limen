<script setup lang="ts">
const { el: sectionEl, isVisible: sectionVisible } = useReveal({
  threshold: 0.1,
});

const personas = [
  {
    name: "The Freelancer",
    role: "Project end dates are client-dependent",
    pill: "\u00B13 days",
    pillClass: "bg-limen-light text-limen",
    gradient: "from-coral to-coral-dark",
  },
  {
    name: "The Remote Worker",
    role: "Rolling month-to-month contracts",
    pill: "\u00B15 days",
    pillClass: "bg-limen-light text-limen",
    gradient: "from-limen to-limen-dark",
  },
  {
    name: "The Soft Mover",
    role: "Considering a move, not ready to commit",
    pill: "Exploring",
    pillClass: "bg-[#F5E6E0] text-coral-dark",
    gradient: "from-warning to-[#C49238]",
  },
];
</script>

<template>
  <section
    ref="sectionEl"
    class="reveal bg-page py-20 px-6 md:px-12 lg:px-[120px]"
    :class="{ visible: sectionVisible }"
  >
    <div
      class="mx-auto flex max-w-[1080px] flex-col gap-14 lg:flex-row lg:items-start lg:gap-16"
    >
      <!-- Left column -->
      <div class="max-w-[520px] shrink-0">
        <span class="section-label">WHO THIS IS FOR</span>

        <h2 class="mt-4 text-4xl font-bold leading-tight tracking-tight text-ink">
          You have plans.<br />But plans have plans.
        </h2>

        <div class="mt-6 max-w-[480px] space-y-5 text-[17px] leading-relaxed text-ink-secondary">
          <p>
            You're a freelancer flying to Lisbon in June. Or a designer
            relocating to Berlin for three months. Or a couple swapping
            apartments for the summer.
          </p>
          <p>
            Your plans are real &mdash; but your dates aren't final.
            Traditional booking forces you to commit or lose money. LIMEN lets
            you hold your options open.
          </p>
        </div>
      </div>

      <!-- Right column: persona cards -->
      <div class="flex flex-1 flex-col gap-4">
        <div
          v-for="persona in personas"
          :key="persona.name"
          class="flex items-center gap-4 rounded-card border border-edge bg-card p-5 shadow-card"
        >
          <!-- Gradient avatar -->
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br"
            :class="persona.gradient"
          >
            <span class="text-lg font-bold text-ink-inverse">
              {{ persona.name.charAt(4).toUpperCase() }}
            </span>
          </div>

          <!-- Info -->
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-ink">{{ persona.name }}</p>
            <p class="text-sm text-ink-tertiary">{{ persona.role }}</p>
          </div>

          <!-- Pill -->
          <span
            class="shrink-0 rounded-pill px-3 py-1 text-xs font-semibold"
            :class="persona.pillClass"
          >
            {{ persona.pill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
