<script setup lang="ts">
// Announcement bar state
const dismissed = ref(false);
onMounted(() => {
  dismissed.value = localStorage.getItem("limen-announcement-dismissed") === "1";
});
function dismiss() {
  dismissed.value = true;
  localStorage.setItem("limen-announcement-dismissed", "1");
}

// Nav state
const scrolled = ref(false);
const mobileOpen = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 20;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];
</script>

<template>
  <!-- Single fixed wrapper — announcement bar + nav as one unit, no overlap -->
  <div class="fixed top-0 right-0 left-0 z-50">

    <!-- Announcement bar -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <div
        v-if="!dismissed"
        class="relative bg-ink px-4 py-2 text-center text-xs font-medium text-ink-inverse"
      >
        <span class="inline-flex items-center gap-2">
          <!-- Live pulse dot -->
          <span class="relative flex h-2 w-2 shrink-0">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-limen opacity-75" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-limen" />
          </span>
          <span class="text-ink-inverse-secondary">Now matching in</span>
          <span class="font-semibold text-ink-inverse">Lisbon</span>
          <span class="text-ink-inverse-secondary">·</span>
          <span class="font-semibold text-ink-inverse">Berlin</span>
          <span class="text-ink-inverse-secondary">·</span>
          <span class="font-semibold text-ink-inverse">Barcelona</span>
          <span class="mx-1 text-ink-inverse-secondary opacity-40">|</span>
          <a
            href="#cta"
            class="underline underline-offset-2 text-limen-light opacity-80 transition-opacity hover:opacity-100"
          >
            Get matched →
          </a>
        </span>

        <!-- Dismiss -->
        <button
          class="absolute right-4 top-1/2 -translate-y-1/2 text-ink-inverse-secondary transition-colors hover:text-ink-inverse"
          aria-label="Dismiss announcement"
          @click="dismiss"
        >
          <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Transition>

    <!-- Nav bar -->
    <nav
      class="transition-all duration-300"
      :class="[
        scrolled
          ? 'bg-card/92 backdrop-blur-xl border-b border-edge shadow-sm'
          : 'bg-transparent',
      ]"
    >
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <!-- Logo mark + wordmark -->
        <NuxtLink to="/" class="flex items-center gap-2.5">
          <!-- Green square mark -->
          <span class="flex h-6 w-6 items-center justify-center rounded-sm bg-limen">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </span>
          <span class="text-xl font-bold tracking-tight text-ink">LIMEN</span>
        </NuxtLink>

        <!-- Desktop links -->
        <div class="hidden items-center gap-8 md:flex">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
          >
            {{ link.label }}
          </a>
          <a
            href="#cta"
            class="rounded-button bg-limen px-5 py-2.5 text-sm font-semibold text-ink-inverse shadow-card
                   transition-all duration-150 hover:bg-limen-dark hover:shadow-card-hover active:scale-[0.98]"
          >
            Submit your intent
          </a>
        </div>

        <!-- Mobile hamburger -->
        <button
          class="flex h-9 w-9 items-center justify-center rounded-button text-ink transition-colors hover:bg-muted md:hidden"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!mobileOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileOpen"
          class="border-b border-edge bg-card/95 px-6 pb-6 backdrop-blur-xl md:hidden"
        >
          <div class="flex flex-col gap-1 pt-2">
            <a
              v-for="link in links"
              :key="link.href"
              :href="link.href"
              class="rounded-button px-3 py-2.5 text-sm font-medium text-ink-secondary transition-colors hover:bg-muted hover:text-ink"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </a>
            <a
              href="#cta"
              class="mt-3 rounded-button bg-limen px-5 py-3 text-center text-sm font-semibold text-ink-inverse
                     transition-all hover:bg-limen-dark active:scale-[0.98]"
              @click="mobileOpen = false"
            >
              Submit your intent
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </div>
</template>
