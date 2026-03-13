<script setup lang="ts">
useSeoMeta({
  title: "LIMEN — Hold your home. Keep your options open.",
  description:
    "LIMEN matches uncertain travelers with verified local hosts across Europe. Flexible dates, personal curation, and WhatsApp-mediated introductions. Pay a small coordination fee to keep your options open.",
  ogTitle: "LIMEN — Hold your home. Keep your options open.",
  ogDescription:
    "Flexible housing matches for remote workers, freelancers, and soft movers. Currently matching in Lisbon, Berlin, and Barcelona.",
  ogType: "website",
});
</script>

<template>
  <div>
    <!-- Hero + Trust -->
    <LandingHeroSection />
    <LandingTrustBar />

    <!-- Problem / Solution -->
    <LandingWhoItsFor />
    <LandingBeforeAfter />

    <!-- Process -->
    <LandingHowItWorks />

    <!-- Value -->
    <LandingFeaturesGrid />
    <LandingComparisonTable />

    <!-- Pricing -->
    <LandingPricingSection />

    <!-- Social proof: testimonials after pricing closes the decision -->
    <LandingTestimonialsSection />

    <!-- Geography -->
    <LandingActiveCities />

    <!-- FAQ: objection handling -->
    <LandingFaqSection />

    <!-- Belief: emotional connection leads into final CTA -->
    <LandingManifestoBanner />

    <!-- Final conversion -->
    <LandingFinalCta />
  </div>
</template>
