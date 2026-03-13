<script setup lang="ts">
definePageMeta({ middleware: "auth" });

const cards = [
  {
    to: "/dashboard/listings",
    title: "My listings",
    description: "Manage your host and travel listings.",
    icon: "home",
  },
  {
    to: "/dashboard/matches",
    title: "My matches",
    description: "View proposals and active matches.",
    icon: "users",
  },
  {
    to: "/dashboard/profile",
    title: "Profile & verification",
    description: "Complete your profile and get verified.",
    icon: "shield",
  },
];
</script>

<template>
  <div class="min-h-screen bg-page">
    <!-- Dashboard header -->
    <header class="border-b border-edge bg-card px-6 py-4 md:px-10">
      <div class="mx-auto flex max-w-5xl items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold tracking-tight text-ink">
          LIMEN
        </NuxtLink>
        <span class="rounded-pill bg-limen-light px-3 py-1 text-xs font-semibold text-limen">
          Dashboard
        </span>
      </div>
    </header>

    <!-- Content -->
    <main class="mx-auto max-w-5xl px-6 py-12 md:px-10">
      <div class="mb-10">
        <h1 class="text-3xl font-semibold text-ink">Welcome back</h1>
        <p class="mt-2 text-ink-secondary">Manage your LIMEN account.</p>
      </div>

      <div class="grid gap-4 sm:grid-cols-3">
        <NuxtLink
          v-for="card in cards"
          :key="card.to"
          :to="card.to"
          class="group flex flex-col gap-4 rounded-card border border-edge bg-card p-6 shadow-card
                 transition-all duration-200 hover:-translate-y-0.5 hover:border-limen/30 hover:shadow-card-hover"
        >
          <!-- Icon -->
          <div class="flex h-10 w-10 items-center justify-center rounded-button bg-limen-light text-limen">
            <!-- Home -->
            <svg v-if="card.icon === 'home'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <!-- Users -->
            <svg v-if="card.icon === 'users'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <!-- Shield -->
            <svg v-if="card.icon === 'shield'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
            </svg>
          </div>

          <div>
            <h2 class="font-semibold text-ink">{{ card.title }}</h2>
            <p class="mt-1 text-sm text-ink-secondary">{{ card.description }}</p>
          </div>

          <!-- Arrow appears on hover -->
          <div class="mt-auto flex items-center gap-1 text-xs font-medium text-limen opacity-0 transition-opacity duration-150 group-hover:opacity-100">
            Open
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </div>
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
