<script setup lang="ts">
const { el: footerEl, isVisible: footerVisible } = useReveal({ threshold: 0.05 });

const email = ref('');

const productLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Cities', href: '#cities' },
  { label: 'FAQ', href: '#faq' },
];

const companyLinks = [
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
];
</script>

<template>
  <footer
    ref="footerEl"
    class="reveal bg-dark py-16 px-6 md:px-[60px] lg:px-[120px]"
    :class="{ visible: footerVisible }"
  >
    <div class="mx-auto max-w-6xl">
      <!-- Newsletter -->
      <div class="mb-14">
        <h3 class="mb-4 text-xl font-semibold text-ink-inverse">Stay in the loop</h3>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            v-model="email"
            type="email"
            placeholder="you@example.com"
            class="flex-1 rounded-button border border-white/10 bg-dark-card px-5 py-3 text-sm text-ink-inverse placeholder:text-ink-inverse-secondary focus:border-limen focus:outline-none focus:ring-1 focus:ring-limen"
          />
          <button
            class="shrink-0 rounded-button bg-limen px-6 py-3 text-sm font-semibold text-ink-inverse transition-colors hover:bg-limen-dark"
          >
            Subscribe
          </button>
        </div>
      </div>

      <!-- Link columns -->
      <div class="mb-14 grid grid-cols-2 gap-10 md:grid-cols-4">
        <!-- Column 1: Brand -->
        <div class="col-span-2 md:col-span-1">
          <p class="mb-3 text-lg font-bold text-ink-inverse">LIMEN</p>
          <p class="text-sm leading-relaxed text-ink-inverse-secondary">
            Travel matches, not listings.
          </p>
        </div>

        <!-- Column 2: Product -->
        <div>
          <p class="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-inverse-secondary">
            Product
          </p>
          <ul class="flex flex-col gap-2.5">
            <li v-for="link in productLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-ink-inverse-secondary transition-colors hover:text-ink-inverse"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Company -->
        <div>
          <p class="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-inverse-secondary">
            Company
          </p>
          <ul class="flex flex-col gap-2.5">
            <li v-for="link in companyLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-ink-inverse-secondary transition-colors hover:text-ink-inverse"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Legal -->
        <div>
          <p class="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-inverse-secondary">
            Legal
          </p>
          <ul class="flex flex-col gap-2.5">
            <li v-for="link in legalLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-ink-inverse-secondary transition-colors hover:text-ink-inverse"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row"
      >
        <p class="text-sm text-ink-inverse-secondary">
          &copy; 2025 LIMEN. All rights reserved.
        </p>

        <!-- Social icons -->
        <div class="flex items-center gap-4">
          <!-- Twitter / X -->
          <a
            href="#"
            class="text-ink-inverse-secondary transition-colors hover:text-ink-inverse"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>

          <!-- Instagram -->
          <a
            href="#"
            class="text-ink-inverse-secondary transition-colors hover:text-ink-inverse"
            aria-label="Instagram"
          >
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
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          <!-- LinkedIn -->
          <a
            href="#"
            class="text-ink-inverse-secondary transition-colors hover:text-ink-inverse"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
