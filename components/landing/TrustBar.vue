<script setup lang="ts">
const { el: barEl, isVisible: barVisible } = useReveal({ threshold: 0.2 });

const stats = [
  { value: "Founding", label: "Accepting early members" },
  { value: "3", label: "Active Cities" },
  { value: "<72h", label: "Match Response" },
  { value: "100%", label: "Human-Verified" },
];
</script>

<template>
  <section
    ref="barEl"
    class="reveal bg-page py-8 px-6 md:px-12 lg:px-[120px]"
    :class="{ visible: barVisible }"
  >
    <div
      class="mx-auto flex max-w-[960px] flex-col items-center justify-center gap-6 sm:flex-row sm:gap-0"
    >
      <template v-for="(stat, i) in stats" :key="stat.label">
        <div class="flex flex-col items-center gap-1 px-8 text-center">
          <span class="text-3xl font-bold tracking-tight text-ink">
            {{ stat.value }}
          </span>
          <span class="text-sm text-ink-tertiary">{{ stat.label }}</span>
        </div>
        <div
          v-if="i < stats.length - 1"
          class="hidden h-10 w-px bg-edge sm:block"
        />
      </template>
    </div>
  </section>
</template>
