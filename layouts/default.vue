<template>
  <div class="min-h-screen bg-page text-ink">
    <!-- NavBar contains the announcement bar — single fixed unit, no overlap -->
    <LandingNavBar />
    <main>
      <slot />
    </main>
    <LandingFooterSection />
  </div>
</template>
