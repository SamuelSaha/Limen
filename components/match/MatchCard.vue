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

const statusColors: Record<string, string> = {
  proposed: "bg-amber-50 text-amber-700",
  accepted: "bg-emerald-50 text-emerald-700",
  declined: "bg-red-50 text-red-700",
  completed: "bg-stone-100 text-stone-700",
  cancelled: "bg-stone-100 text-stone-400",
};
</script>

<template>
  <div class="rounded-lg border border-stone-200 bg-white p-5">
    <div class="flex items-center justify-between">
      <span
        class="rounded-full px-2 py-0.5 text-xs font-medium"
        :class="statusColors[match.status]"
      >
        {{ match.status }}
      </span>
      <span class="text-sm text-stone-400">
        Score: {{ match.fitScore }}/100
      </span>
    </div>

    <div class="mt-3 flex items-center justify-between">
      <span class="text-sm font-medium capitalize">
        {{ match.tier }} tier
      </span>
      <span class="text-xs text-stone-400">
        {{ new Date(match.proposedAt).toLocaleDateString() }}
      </span>
    </div>

    <div v-if="match.status === 'proposed'" class="mt-4 flex gap-2">
      <button
        class="flex-1 rounded-lg bg-stone-900 py-2 text-sm font-medium text-white hover:bg-stone-800"
        @click="$emit('accept', match.id)"
      >
        Accept
      </button>
      <button
        class="flex-1 rounded-lg border border-stone-300 py-2 text-sm font-medium hover:bg-stone-50"
        @click="$emit('decline', match.id)"
      >
        Decline
      </button>
    </div>
  </div>
</template>
