# Stack Decisions

Every choice here is specific to Limen's constraints: solo developer, two-sided EU housing marketplace, transitioning from a manual concierge MVP.

## Framework: Nuxt 3

**Why not plain Vue SPA?** Marketplace landing pages and public listings need SEO. Nuxt gives SSR for public routes and SPA-like behavior for the authenticated dashboard — same codebase, same deploy.

**Why not Next.js?** Vue is the chosen frontend. Nuxt is its SSR framework. No translation layer needed.

**Why fullstack Nuxt (Nitro server routes)?** Solo developer. One repo, one process, one deployment. No separate API server to maintain. Server routes handle API endpoints, Stripe webhooks, and auth — all co-located with the frontend. Extract to a standalone API only when a second client (mobile app) justifies it.

## Database: PostgreSQL

Relational data: users, listings, matches, transactions, reviews. All entities have clear foreign key relationships.

The critical query — finding matches with overlapping flexible date ranges — is native Postgres:

```sql
WHERE daterange(date_from - flexibility_days, date_to + flexibility_days)
   && daterange(:search_from, :search_to)
```

No external search engine needed. PostGIS is available if geo-search becomes relevant.

**Hosting:** Same Hetzner VPS via Coolify in Phase 2. Move to Neon (managed) if ops burden justifies the cost.

## ORM: Drizzle

SQL-native. Lightweight. TypeScript inference without codegen. Migrations via `drizzle-kit` without the Prisma engine binary overhead.

The schema in `server/db/schema.ts` is the single source of truth for the data model. No separate migration files to keep in sync mentally.

## Auth: Better Auth

Self-hosted, session-based. The user table is ours — critical when auth ties directly to verification status and trust scores. Supabase Auth or Clerk would own the user identity, creating friction when the trust layer is the core product.

Supports email/password + social (Google) out of the box. Nuxt integration via `@better-auth/nuxt`.

## Payments: Stripe

Already in the PRD. Checkout Sessions for coordination fees. Webhook handler in a Nitro server route (`server/api/payments/webhook.post.ts`).

Stripe Connect is the path for host payouts if the model evolves beyond introduction fees.

## Styling: Tailwind CSS v4 + shadcn-vue

Tailwind for utility-first speed. shadcn-vue (Radix Vue primitives) for accessible, unstyled components that don't fight the design.

The trust UX — verification badges, match score indicators, payment flow — needs precise control. A prescriptive component library (Vuetify, PrimeVue) would slow this down.

## Email: Resend

Transactional emails: match proposals, payment confirmations, stay reminders, intro emails between matched users. Vue Email for templates.

Free tier: 3,000 emails/month. More than enough through Phase 3.

## File Storage: Cloudflare R2

ID photos and profile pictures. S3-compatible API, zero egress fees, EU-friendly. Cheaper than AWS S3 at any scale relevant to Limen.

## Hosting: Hetzner VPS + Coolify

| Requirement | Solution |
|---|---|
| EU data residency (GDPR) | Hetzner Falkenstein/Nuremberg datacenter |
| Push-to-deploy | Coolify watches GitHub, builds, deploys |
| SSL | Coolify auto-provisions via Let's Encrypt |
| Cost | CX22: €4.35/month (2 vCPU, 4GB RAM, 40GB SSD) |

Total monthly infrastructure cost: ~€10-15 (Hetzner + R2 + Resend free + Sentry free).

## Validation: Zod

Shared schemas between Vue forms and Nitro server routes. One definition in `lib/validators/`, used on both sides. Prevents client-server drift.

## Monitoring: Sentry

Error tracking on client and server. Nuxt module: `@sentry/nuxt`. Free tier covers the volume.

The minimum viable monitoring: know when a Stripe webhook fails, when a match proposal errors out, when a user hits a 500.

## What's NOT in the Stack

| Omitted | Reason |
|---|---|
| tRPC | Nuxt server routes + `$fetch` + Zod gives type-safe APIs without the abstraction layer |
| Pinia | `useState` composable handles simple state. Add Pinia when client state complexity demands it |
| Redis / BullMQ | No background jobs yet. Add when matching notifications or batch emails justify async processing |
| Meilisearch / Algolia | Postgres handles city + date range + trust score filtering. No full-text search needed |
| Docker in dev | `nuxt dev` + local Postgres. Coolify handles containerization in prod |
| Supabase | Tempting bundle but locks user identity into their SDK. Trust model needs full control |

## Decision Log

Track non-obvious decisions here as the project evolves.

| Date | Decision | Context |
|---|---|---|
| 2026-03-12 | Nuxt fullstack monolith | Solo dev, no second client. One deploy target. |
| 2026-03-12 | Hetzner over Vercel | EU data residency, cost ceiling, full control |
| 2026-03-12 | Better Auth over Supabase Auth | Trust/verification is core product. Need to own user table. |
| 2026-03-12 | No Redis initially | Premature. Add at first background job pain point. |
