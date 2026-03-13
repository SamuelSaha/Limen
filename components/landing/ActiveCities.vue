<script setup lang="ts">
const { el: headerEl, isVisible: headerVisible } = useReveal();
const { el: gridEl, isVisible: gridVisible } = useReveal({ threshold: 0.1 });

interface City {
  name: string;
  image: string;
}

const cities: City[] = [
  {
    name: 'Lisbon',
    // Colourful Alfama neighbourhood — warm tiles, hilly streets
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85',
  },
  {
    name: 'Berlin',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=700&q=85',
  },
  {
    name: 'Barcelona',
    // Rooftop view over the city at golden hour
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=700&q=85',
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
      <p class="section-label mb-4">WHERE WE MATCH</p>
      <h2 class="text-4xl font-semibold text-ink">Currently active in</h2>
    </div>

    <!-- City Grid -->
    <div
      ref="gridEl"
      class="reveal-stagger mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
      :class="{ visible: gridVisible }"
    >
      <div
        v-for="city in cities"
        :key="city.name"
        class="group relative aspect-[4/3] overflow-hidden rounded-hero"
      >
        <!-- Background image -->
        <img
          :src="city.image"
          :alt="`${city.name} cityscape`"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <!-- City name -->
        <div class="absolute bottom-0 left-0 p-5">
          <h3 class="text-2xl font-bold text-white">{{ city.name }}</h3>
        </div>

        <!-- Matching now badge -->
        <div class="absolute top-4 right-4">
          <div
            class="inline-flex items-center gap-2 rounded-pill bg-limen/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
          >
            <!-- Pulse dot -->
            <span class="relative flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"
              />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Matching now
          </div>
        </div>
      </div>
    </div>

    <!-- Coming soon text -->
    <p class="mt-8 text-center text-sm text-ink-tertiary">
      More cities coming soon &middot; Join the waitlist
    </p>
  </section>
</template>
