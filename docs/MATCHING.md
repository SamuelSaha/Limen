# Matching Logic

The matching algorithm is Limen's core product. It replaces the founder's manual judgment from Phase 1.

Source: `server/utils/matching.ts`

## Fit Score (0–100)

Every potential match gets a score. Only matches above the threshold (currently 40) are proposed to users.

### Weights

| Signal | Weight | Rationale |
|---|---|---|
| Flexibility overlap | 50% | Date compatibility is binary — no overlap, no match |
| Verification quality | 30% | Trust is the product. Unverified users get deprioritized |
| Reciprocity | 20% | Two-way swaps are the defensible use case |

### Flexibility Overlap Score (0–100)

Measures how many days the host's availability and traveler's desired dates overlap, accounting for both parties' flexibility windows.

```
effective_host_range = [host.date_from - host.flex, host.date_to + host.flex]
effective_trav_range = [trav.date_from - trav.flex, trav.date_to + trav.flex]
overlap_days = max(0, min(host_end, trav_end) - max(host_start, trav_start))
score = min(overlap_days / 7, 1) × 100
```

7+ overlap days = max score. Below that, linear decay.

### Verification Quality Score (0–100)

Directly maps the host's `trust_score` from their profile. Trust score is built from:

| Signal | Points |
|---|---|
| Email verified | +10 |
| LinkedIn URL provided | +15 |
| LinkedIn URL validated (profile exists, matches name) | +10 |
| ID photo uploaded | +20 |
| ID photo verified (manual check) | +15 |
| Video intro recorded | +15 |
| Completed stay with positive NPS | +15 per stay (capped at 3) |

Max trust score: 100. New users start at 0.

### Reciprocity Score

- User has both a host listing AND a travel listing in the counterparty's city → 100
- One-way match → 30

This heavily favors swaps, which are the most defensible and valuable use case.

## Tier Assignment

Determined by the traveler's flexibility and swap status:

| Condition | Tier | Fee |
|---|---|---|
| Both parties have cross-listings (swap) | Swap | €75 |
| Traveler flexibility ≥ 7 days | Premium | €100 |
| Default | Standard | €50 |

## Algorithm Training Plan

Every declined match must have a `failure_reason`. This field is the training data.

### Phase 2 (Current): Rule-Based

Manual weights, hard-coded thresholds. Change weights based on conversion data.

Weekly review: query failure reasons, adjust weights.

```sql
-- What's killing matches?
SELECT failure_reason, count(*)
FROM matches WHERE status = 'declined'
GROUP BY failure_reason ORDER BY count DESC;
```

If "price" dominates → adjust tier pricing.
If "dates" dominates → increase flexibility weight.
If "vibe" dominates → improve verification signals.

### Phase 3 (Future): Learned Weights

When there are 200+ match outcomes:

1. Export match data + outcomes as training set
2. Use logistic regression (not neural nets — interpretability matters) to learn weights
3. Features: overlap_days, trust_score_delta, is_swap, same_language, price_tier
4. Target: binary (completed vs. declined/cancelled)
5. Replace hardcoded weights with model coefficients
6. A/B test model vs. manual weights

### Phase 4 (Future): Proactive Matching

Instead of scoring existing pairs, actively suggest listings that would create high-score matches.

"You have a host in Lisbon for June. 3 travelers are looking for Lisbon in June ±5 days. Here's who to invite."

This inverts the flow from reactive matching to demand-driven supply acquisition.

## Metrics

| Metric | Target | Measures |
|---|---|---|
| Proposal → Accept rate | >30% | Algorithm quality |
| Accept → Payment rate | >60% | Pricing correctness |
| Payment → Completed stay | >80% | Trust/vetting quality |
| Average fit score of completed stays | >60 | Score calibration |
| Average fit score of declined matches | Track, don't target | Identifies score threshold |

## Invariants

- Never propose a match where overlap_days = 0 (even with flexibility)
- Never propose a match to an unverified user
- Never propose more than 3 active matches to the same user simultaneously
- Always require failure_reason on decline — the algorithm can't learn without it
