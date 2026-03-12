<template>
  <div class="min-h-screen bg-stone-50 text-stone-900">
    <header class="border-b border-stone-200 bg-white">
      <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="text-xl font-semibold tracking-tight">
          LIMEN
        </NuxtLink>
        <div class="flex items-center gap-6">
          <NuxtLink to="/listings" class="text-sm hover:text-stone-600">
            Listings
          </NuxtLink>
          <NuxtLink to="/dashboard" class="text-sm hover:text-stone-600">
            Dashboard
          </NuxtLink>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
