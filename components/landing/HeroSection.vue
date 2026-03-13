<script setup lang="ts">
const trustPills = [
  { label: "ID Verified Members", icon: "shield-check" },
  { label: "Secure Stripe Payments", icon: "credit-card" },
  { label: "Flexible ±7 Day Windows", icon: "calendar" },
];
</script>

<template>
  <!-- Hero renders above-fold: no reveal class, no opacity:0 flash -->
  <!-- pt accounts for dark announcement bar (~32px) + nav (~64px) = ~96px, plus breathing room -->
  <section class="relative overflow-hidden bg-card pt-32 pb-24 md:pt-40 md:pb-32">
    <!-- Atmospheric depth — limen green + coral hues, barely-there -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0"
      style="
        background:
          radial-gradient(ellipse at 8% 88%, rgba(61,138,90,0.07) 0%, transparent 52%),
          radial-gradient(ellipse at 88% 12%, rgba(216,149,117,0.05) 0%, transparent 52%),
          radial-gradient(ellipse at 50% 50%, rgba(61,138,90,0.02) 0%, transparent 70%);
      "
    />

    <div class="relative mx-auto max-w-7xl px-6 md:px-12">
      <!-- Asymmetric 12-col grid: text left 7, image right 5 -->
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

        <!-- Left column: all text, left-aligned -->
        <div class="flex flex-col gap-7 lg:col-span-7">
          <!-- Pill badge -->
          <div class="inline-flex w-fit items-center gap-2 rounded-pill bg-limen-light px-4 py-1.5 text-sm font-semibold text-limen">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
              <path d="M20 3v4"/><path d="M22 5h-4"/>
            </svg>
            Now matching across Europe
          </div>

          <!-- Headline: light/bold weight split for typographic tension -->
          <h1 class="text-5xl leading-[1.02] [letter-spacing:-0.04em] text-ink sm:text-6xl lg:text-[68px]">
            <span class="block font-light">Hold your home.</span>
            <span class="block font-bold">Keep your options open.</span>
          </h1>

          <!-- Sub-headline -->
          <p class="max-w-[560px] text-lg leading-relaxed text-ink-secondary">
            You pay €50 to hold a flexible housing option in Lisbon, Berlin, or
            Barcelona. We WhatsApp you within 24h with verified matches. Every host
            is ID-verified. Every stay is legally protected.
          </p>

          <!-- CTA row -->
          <div class="flex flex-col gap-4 sm:flex-row">
            <a
              href="#cta"
              class="inline-flex items-center gap-2.5 rounded-button bg-limen px-8 py-4 text-base font-semibold text-ink-inverse shadow-hero
                     transition-all duration-150 hover:bg-limen-dark hover:shadow-card-hover active:scale-[0.98] active:shadow-card"
            >
              Submit My Intent — €50
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>

            <a
              href="#how-it-works"
              class="inline-flex items-center gap-2.5 rounded-button border border-edge-strong px-8 py-4 text-base font-semibold text-ink
                     transition-all duration-150 hover:bg-muted active:scale-[0.98]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="6 3 20 12 6 21 6 3"/>
              </svg>
              See How It Works
            </a>
          </div>

          <!-- Guarantee leads, fee follows — fixed disclaimer framing -->
          <p class="text-sm text-ink-tertiary">
            Matched within 72h or full credit — guaranteed. One-time coordination fee.
          </p>

          <!-- Trust pills -->
          <div class="flex flex-wrap items-center gap-5">
            <div
              v-for="pill in trustPills"
              :key="pill.label"
              class="inline-flex items-center gap-2 text-sm text-ink-secondary"
            >
              <!-- shield-check -->
              <svg v-if="pill.icon === 'shield-check'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-limen">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              <!-- credit-card -->
              <svg v-if="pill.icon === 'credit-card'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-limen">
                <rect width="20" height="14" x="2" y="5" rx="2"/>
                <line x1="2" x2="22" y1="10" y2="10"/>
              </svg>
              <!-- calendar -->
              <svg v-if="pill.icon === 'calendar'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-limen">
                <path d="M8 2v4"/><path d="M16 2v4"/>
                <rect width="18" height="18" x="3" y="4" rx="2"/>
                <path d="M3 10h18"/>
              </svg>
              {{ pill.label }}
            </div>
          </div>
        </div>

        <!-- Right column: hero image, tall, contained -->
        <div class="lg:col-span-5">
          <div class="relative h-[340px] overflow-hidden rounded-hero shadow-hero lg:h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=85"
              alt="A bright, minimal European apartment interior"
              class="absolute inset-0 h-full w-full object-cover"
            />

            <!-- Glassmorphism overlays — they show the product working -->
            <div class="absolute top-4 left-4 flex flex-col gap-2.5">
              <!-- Location -->
              <div class="glass inline-flex items-center gap-2 rounded-button px-3.5 py-2 text-sm font-medium text-ink">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-limen">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Alfama, Lisbon
              </div>

              <!-- Dates + flexibility -->
              <div class="glass inline-flex items-center gap-2 rounded-button px-3.5 py-2 text-sm font-medium text-ink">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-limen">
                  <path d="M8 2v4"/><path d="M16 2v4"/>
                  <rect width="18" height="18" x="3" y="4" rx="2"/>
                  <path d="M3 10h18"/>
                </svg>
                Jun 10–24
                <span class="rounded-pill bg-limen-light px-2 py-0.5 text-xs font-semibold text-limen">±3d</span>
              </div>

              <!-- Match found -->
              <div
                class="pulse-soft inline-flex items-center gap-2 rounded-button px-3.5 py-2 text-sm font-semibold text-ink-inverse"
                style="background: rgba(61,138,90,0.87)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                </svg>
                Match found ✓
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
