/**
 * Matching heuristics — the algorithm you're replacing.
 *
 * Every weight and threshold here was learned from Phase 1 manual ops.
 * When you change a weight, log WHY in the commit message.
 */

interface MatchCandidate {
  flexibilityDays: number;
  trustScore: number;
  isSwap: boolean; // both users have host + travel listings
  dateOverlapDays: number;
}

const WEIGHTS = {
  flexibilityOverlap: 0.5,
  verificationQuality: 0.3,
  reciprocity: 0.2,
} as const;

/**
 * Calculate fit score (0-100) between a traveler request and host listing.
 * Direct port of PRD heuristics.
 */
export function calculateFitScore(candidate: MatchCandidate): number {
  const flexScore = Math.min(candidate.dateOverlapDays / 7, 1) * 100;
  const trustScoreNorm = candidate.trustScore;
  const reciprocityScore = candidate.isSwap ? 100 : 30;

  const weighted =
    flexScore * WEIGHTS.flexibilityOverlap +
    trustScoreNorm * WEIGHTS.verificationQuality +
    reciprocityScore * WEIGHTS.reciprocity;

  return Math.round(Math.min(100, Math.max(0, weighted)));
}

/**
 * Determine coordination tier and fee based on listing attributes.
 */
export function determineTier(flexDays: number, isSwap: boolean) {
  if (isSwap) return { tier: "swap" as const, feeCents: 7500 };
  if (flexDays >= 7) return { tier: "premium" as const, feeCents: 10000 };
  return { tier: "standard" as const, feeCents: 5000 };
}
