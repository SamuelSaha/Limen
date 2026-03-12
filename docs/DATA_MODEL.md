# Data Model

Source of truth: `server/db/schema.ts`

## Entity Relationship

```
users
 ├── sessions (1:N)
 ├── accounts (1:N, OAuth providers)
 ├── profiles (1:1, trust layer)
 ├── listings (1:N)
 ├── payments (1:N)
 └── reviews (1:N, as reviewer or reviewee)

listings
 ├── matches (as host_listing or traveler_listing)
 └── users (N:1)

matches
 ├── payments (1:N)
 ├── reviews (1:N)
 ├── listings.host_listing (N:1)
 └── listings.traveler_listing (N:1)
```

## Tables

### users

Better Auth managed. Core identity.

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| email | text | unique |
| name | text | |
| email_verified | boolean | |
| image | text | avatar URL |
| created_at | timestamp | |
| updated_at | timestamp | |

### profiles

Trust layer. Extends the user with verification data.

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | FK → users, unique |
| bio | text | |
| linkedin_url | text | verification signal |
| id_photo_key | text | R2 object key for ID photo |
| verification_status | enum | pending / verified / rejected |
| verified_at | timestamp | |
| trust_score | integer | 0-100, manual then algorithmic |
| languages | text[] | |

### listings

What users post — either "I want to host" or "I want to travel."

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | FK → users |
| intent_type | enum | host / travel |
| city | text | |
| country | text | ISO 3166-1 alpha-2 |
| date_from | date | |
| date_to | date | |
| flexibility_days | integer | ±N days, default 3 |
| description | text | |
| budget_cents | integer | optional, in cents |
| active | boolean | default true |

### matches

The core product entity. Links a host listing to a traveler listing.

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| host_listing_id | uuid | FK → listings |
| traveler_listing_id | uuid | FK → listings |
| status | enum | proposed / accepted / declined / completed / cancelled |
| fit_score | integer | 0-100, from matching algorithm |
| tier | enum | standard / premium / swap |
| proposed_at | timestamp | |
| responded_at | timestamp | |
| failure_reason | text | **critical** — learning data for algorithm training |
| notes | text | founder observations |

### payments

Stripe payment tracking per match.

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| match_id | uuid | FK → matches |
| user_id | uuid | FK → users |
| stripe_session_id | text | Checkout Session ID |
| stripe_payment_intent_id | text | filled after payment |
| amount_cents | integer | |
| currency | text | default "eur" |
| status | enum | pending / paid / refunded / failed |
| paid_at | timestamp | |

### reviews

Post-stay feedback. Feeds back into trust scores.

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| match_id | uuid | FK → matches |
| reviewer_id | uuid | FK → users |
| reviewee_id | uuid | FK → users |
| nps_score | integer | 1-10 |
| comment | text | |
| metadata | jsonb | structured feedback for algorithm tuning |

## Key Queries

### Find matches (the core query)

```sql
SELECT l.*
FROM listings l
JOIN profiles p ON p.user_id = l.user_id
WHERE l.city = :city
  AND l.intent_type != :user_intent
  AND l.active = true
  AND p.verification_status = 'verified'
  AND daterange(
        l.date_from::date - l.flexibility_days,
        l.date_to::date + l.flexibility_days
      )
      && daterange(:search_from::date, :search_to::date)
ORDER BY p.trust_score DESC, l.flexibility_days DESC
LIMIT 10;
```

### Match conversion funnel

```sql
SELECT
  status,
  count(*) as count,
  round(count(*)::numeric / sum(count(*)) over () * 100, 1) as pct
FROM matches
WHERE proposed_at >= now() - interval '30 days'
GROUP BY status
ORDER BY count DESC;
```

### Failure reason analysis (algorithm training data)

```sql
SELECT
  failure_reason,
  count(*) as occurrences
FROM matches
WHERE status = 'declined'
  AND failure_reason IS NOT NULL
GROUP BY failure_reason
ORDER BY occurrences DESC;
```

## Indexes (add when needed)

```sql
CREATE INDEX idx_listings_city_active ON listings (city, active) WHERE active = true;
CREATE INDEX idx_listings_intent_city ON listings (intent_type, city);
CREATE INDEX idx_profiles_verified ON profiles (user_id) WHERE verification_status = 'verified';
CREATE INDEX idx_matches_status ON matches (status);
```

Don't create indexes upfront. Add them when query performance degrades or when `EXPLAIN ANALYZE` shows sequential scans on filtered columns.
