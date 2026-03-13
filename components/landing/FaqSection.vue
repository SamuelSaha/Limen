<script setup lang="ts">
const { el: headerEl, isVisible: headerVisible } = useReveal();
const { el: gridEl, isVisible: gridVisible } = useReveal({ threshold: 0.1 });
const { el: whatsappEl, isVisible: whatsappVisible } = useReveal();

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'How is LIMEN different from Airbnb or Booking.com?',
    answer:
      'Those platforms list properties. We match people. LIMEN pairs you with a verified local whose home fits your travel style \u2014 dates, vibe, budget \u2014 and handles the trust layer so both sides feel safe.',
  },
  {
    question: 'What does \u2018concierge matching\u2019 mean?',
    answer:
      'Every match is personally reviewed. No algorithm dumps \u2014 a real person checks compatibility, verifies details, and introduces you only when the fit is right.',
  },
  {
    question: 'Is my home safe with a stranger?',
    answer:
      'Guests are ID-verified and matched on trust signals (reviews, response quality, profile completeness). You approve every match before any booking is confirmed.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'List your home for free. When a match is confirmed, we charge a one-time matching fee: \u20AC29 for the Essential tier. That\u2019s it \u2014 no commissions, no hidden costs.',
  },
  {
    question: 'Can I set my own availability?',
    answer:
      'Yes. You control your calendar, nightly rate, and house rules. LIMEN only surfaces your listing when it fits a traveler\u2019s request.',
  },
  {
    question: 'What if a match doesn\u2019t work out?',
    answer:
      'If a confirmed match falls through before check-in, you get a full credit toward your next match. We\u2019re building trust, not trapping people.',
  },
  {
    question: 'Which cities are available?',
    answer:
      'We\u2019re currently matching in Lisbon, Berlin, and Barcelona. More cities are coming \u2014 join the waitlist to get notified.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Submit your intent \u2014 tell us where you want to go, when, and what matters to you. We\u2019ll start looking for your match within 48 hours.',
  },
];

const openIndex = ref<number | null>(null);

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<template>
  <section id="faq" class="bg-page py-[100px] px-6 md:px-[60px] lg:px-[120px]">
    <!-- Header -->
    <div
      ref="headerEl"
      class="reveal mx-auto mb-14 max-w-3xl text-center"
      :class="{ visible: headerVisible }"
    >
      <p class="section-label mb-4">FAQ</p>
      <h2 class="text-4xl font-semibold text-ink">Questions? We've got answers.</h2>
    </div>

    <!-- FAQ Grid -->
    <div
      ref="gridEl"
      class="reveal mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2"
      :class="{ visible: gridVisible }"
    >
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="cursor-pointer rounded-card bg-card p-6 shadow-faq transition-shadow hover:shadow-card-hover"
        @click="toggle(index)"
      >
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-[15px] font-semibold leading-snug text-ink">
            {{ faq.question }}
          </h3>
          <!-- Toggle icon -->
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
            class="mt-0.5 shrink-0 text-ink-tertiary transition-transform duration-300"
            :class="{ 'rotate-45': openIndex === index }"
          >
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
        </div>
        <div
          class="grid transition-all duration-300 ease-in-out"
          :class="openIndex === index ? 'grid-rows-[1fr] mt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'"
        >
          <div class="overflow-hidden">
            <p class="text-sm leading-relaxed text-ink-secondary">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- WhatsApp CTA -->
    <div
      ref="whatsappEl"
      class="reveal mx-auto mt-8 max-w-5xl"
      :class="{ visible: whatsappVisible }"
    >
      <div
        class="flex flex-col items-center justify-between gap-4 rounded-card bg-card p-6 shadow-faq sm:flex-row"
      >
        <div class="flex items-center gap-3">
          <!-- WhatsApp icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="shrink-0 text-limen"
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            />
          </svg>
          <p class="text-[15px] font-medium text-ink">
            Still have questions? Chat with us on WhatsApp
          </p>
        </div>
        <a
          href="#"
          class="inline-flex shrink-0 items-center gap-2 rounded-button bg-limen px-6 py-3 text-sm font-semibold text-ink-inverse transition-colors hover:bg-limen-dark"
        >
          Open WhatsApp
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
