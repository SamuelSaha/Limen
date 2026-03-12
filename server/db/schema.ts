import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  pgEnum,
  uuid,
  date,
  jsonb,
} from "drizzle-orm/pg-core";

// ── Enums ──────────────────────────────────────────────

export const intentTypeEnum = pgEnum("intent_type", ["host", "travel"]);

export const verificationStatusEnum = pgEnum("verification_status", [
  "pending",
  "verified",
  "rejected",
]);

export const matchStatusEnum = pgEnum("match_status", [
  "proposed",
  "accepted",
  "declined",
  "completed",
  "cancelled",
]);

export const paymentStatusEnum = pgEnum("payment_status", [
  "pending",
  "paid",
  "refunded",
  "failed",
]);

export const coordinationTierEnum = pgEnum("coordination_tier", [
  "standard",
  "premium",
  "swap",
]);

// ── Users ──────────────────────────────────────────────

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const sessions = pgTable("sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const accounts = pgTable("accounts", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  idToken: text("id_token"),
  password: text("password"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const verifications = pgTable("verifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ── Profiles (trust layer) ─────────────────────────────

export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  bio: text("bio"),
  linkedinUrl: text("linkedin_url"),
  idPhotoKey: text("id_photo_key"), // R2 object key
  verificationStatus: verificationStatusEnum("verification_status")
    .default("pending")
    .notNull(),
  verifiedAt: timestamp("verified_at"),
  trustScore: integer("trust_score").default(0).notNull(), // 0-100, manual then algorithmic
  languages: text("languages").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ── Listings ───────────────────────────────────────────

export const listings = pgTable("listings", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  intentType: intentTypeEnum("intent_type").notNull(),
  city: text("city").notNull(),
  country: text("country").notNull(),
  dateFrom: date("date_from").notNull(),
  dateTo: date("date_to").notNull(),
  flexibilityDays: integer("flexibility_days").default(3).notNull(), // ±N days
  description: text("description"),
  budgetCents: integer("budget_cents"), // traveler's max budget, host's expected value
  active: boolean("active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ── Matches ────────────────────────────────────────────

export const matches = pgTable("matches", {
  id: uuid("id").primaryKey().defaultRandom(),
  hostListingId: uuid("host_listing_id")
    .notNull()
    .references(() => listings.id),
  travelerListingId: uuid("traveler_listing_id")
    .notNull()
    .references(() => listings.id),
  status: matchStatusEnum("status").default("proposed").notNull(),
  fitScore: integer("fit_score").notNull(), // 0-100, from matching algorithm
  tier: coordinationTierEnum("tier").default("standard").notNull(),
  proposedAt: timestamp("proposed_at").defaultNow().notNull(),
  respondedAt: timestamp("responded_at"),
  failureReason: text("failure_reason"), // critical learning data
  notes: text("notes"), // founder observations
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ── Payments ───────────────────────────────────────────

export const payments = pgTable("payments", {
  id: uuid("id").primaryKey().defaultRandom(),
  matchId: uuid("match_id")
    .notNull()
    .references(() => matches.id),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  stripeSessionId: text("stripe_session_id"),
  stripePaymentIntentId: text("stripe_payment_intent_id"),
  amountCents: integer("amount_cents").notNull(),
  currency: text("currency").default("eur").notNull(),
  status: paymentStatusEnum("status").default("pending").notNull(),
  paidAt: timestamp("paid_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ── Reviews (post-stay) ────────────────────────────────

export const reviews = pgTable("reviews", {
  id: uuid("id").primaryKey().defaultRandom(),
  matchId: uuid("match_id")
    .notNull()
    .references(() => matches.id),
  reviewerId: uuid("reviewer_id")
    .notNull()
    .references(() => users.id),
  revieweeId: uuid("reviewee_id")
    .notNull()
    .references(() => users.id),
  npsScore: integer("nps_score").notNull(), // 1-10
  comment: text("comment"),
  metadata: jsonb("metadata"), // structured feedback for algorithm training
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
