import { db } from "~/server/db";
import { matches, listings, profiles } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { calculateFitScore, determineTier } from "~/server/utils/matching";

/**
 * Propose a match between a host listing and a traveler listing.
 * In Phase 2 this is founder-triggered. Later it becomes automated.
 */
export default defineEventHandler(async (event) => {
  const session = event.context.session;
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  const { hostListingId, travelerListingId } = await readBody(event);

  if (!hostListingId || !travelerListingId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Both hostListingId and travelerListingId are required",
    });
  }

  // Fetch both listings
  const [hostListing] = await db
    .select()
    .from(listings)
    .where(eq(listings.id, hostListingId));
  const [travelerListing] = await db
    .select()
    .from(listings)
    .where(eq(listings.id, travelerListingId));

  if (!hostListing || !travelerListing) {
    throw createError({ statusCode: 404, statusMessage: "Listing not found" });
  }

  // Calculate overlap days (simplified — real version uses date math)
  const hostFrom = new Date(hostListing.dateFrom);
  const hostTo = new Date(hostListing.dateTo);
  const travFrom = new Date(travelerListing.dateFrom);
  const travTo = new Date(travelerListing.dateTo);

  const overlapStart = new Date(Math.max(hostFrom.getTime(), travFrom.getTime()));
  const overlapEnd = new Date(Math.min(hostTo.getTime(), travTo.getTime()));
  const overlapDays = Math.max(
    0,
    (overlapEnd.getTime() - overlapStart.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Check if this is a swap (both users have listings in each other's cities)
  const isSwap = hostListing.city === travelerListing.city; // simplified check

  // Fetch trust scores
  const [hostProfile] = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, hostListing.userId));

  const fitScore = calculateFitScore({
    flexibilityDays: Math.min(
      hostListing.flexibilityDays,
      travelerListing.flexibilityDays
    ),
    trustScore: hostProfile?.trustScore ?? 50,
    isSwap,
    dateOverlapDays: overlapDays,
  });

  const { tier } = determineTier(travelerListing.flexibilityDays, isSwap);

  const [match] = await db
    .insert(matches)
    .values({
      hostListingId,
      travelerListingId,
      fitScore,
      tier,
    })
    .returning();

  // TODO: send notification to both parties (email + in-app)

  return match;
});
