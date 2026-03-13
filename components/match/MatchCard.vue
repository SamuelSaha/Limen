<script setup lang="ts">
interface Match {
  id: string;
  status: "proposed" | "accepted" | "declined" | "completed" | "cancelled";
  fitScore: number;
  tier: "standard" | "premium" | "swap";
  proposedAt: string;
}

defineProps<{ match: Match }>();
defineEmits<{
  accept: [matchId: string];
  decline: [matchId: string];
}>();

// Status badge colors — using Limen design tokens
const statusColors: Record<string, string> = {
  proposed: "bg-limen-light text-limen",
  accepted: "bg-limen-light text-limen-dark",
  declined: "bg-coral/15 text-coral-dark",
  completed: "bg-muted text-ink-secondary",
  cancelled: "bg-muted text-ink-tertiary",
};
</script>

<template>
  <div class="rounded-card border border-edge bg-card p-5 shadow-card">
    <div class="flex items-center justify-between">
      <span
        class="rounded-pill px-2.5 py-1 text-xs font-semibold capitalize"
        :class="statusColors[match.status]"
      >
        {{ match.status }}
      </span>
      <span class="text-sm text-ink-tertiary">
        Score: {{ match.fitScore }}/100
      </span>
    </div>

    <div class="mt-3 flex items-center justify-between">
      <span class="text-sm font-medium capitalize text-ink">
        {{ match.tier }} tier
      </span>
      <span class="text-xs text-ink-tertiary">
        {{ new Date(match.proposedAt).toLocaleDateString() }}
      </span>
    </div>

    <div v-if="match.status === 'proposed'" class="mt-4 flex gap-2">
      <button
        class="flex-1 rounded-button bg-limen py-2.5 text-sm font-semibold text-ink-inverse
               transition-all duration-150 hover:bg-limen-dark active:scale-[0.98]"
        @click="$emit('accept', match.id)"
      >
        Accept
      </button>
      <button
        class="flex-1 rounded-button border border-edge-strong py-2.5 text-sm font-medium text-ink
               transition-all duration-150 hover:bg-muted active:scale-[0.98]"
        @click="$emit('decline', match.id)"
      >
        Decline
      </button>
    </div>
  </div>
</template>
