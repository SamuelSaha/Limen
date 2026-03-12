import Stripe from "stripe";
import { db } from "~/server/db";
import { matches, payments } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { determineTier } from "~/server/utils/matching";

export default defineEventHandler(async (event) => {
  const session = event.context.session;
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  const { matchId } = await readBody(event);

  const [match] = await db
    .select()
    .from(matches)
    .where(eq(matches.id, matchId));

  if (!match) {
    throw createError({ statusCode: 404, statusMessage: "Match not found" });
  }
  if (match.status !== "accepted") {
    throw createError({
      statusCode: 400,
      statusMessage: "Match must be accepted before payment",
    });
  }

  const config = useRuntimeConfig();
  const stripe = new Stripe(config.stripeSecretKey);

  const tierFees: Record<string, number> = {
    standard: 5000,
    premium: 10000,
    swap: 7500,
  };
  const amountCents = tierFees[match.tier] ?? 5000;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: `LIMEN ${match.tier} coordination fee`,
            description: "Non-refundable coordination and verification fee",
          },
          unit_amount: amountCents,
        },
        quantity: 1,
      },
    ],
    metadata: {
      matchId: match.id,
      userId: session.user.id,
    },
    success_url: `${config.public.appUrl}/dashboard/matches/${match.id}?payment=success`,
    cancel_url: `${config.public.appUrl}/dashboard/matches/${match.id}?payment=cancelled`,
  });

  // Record pending payment
  await db.insert(payments).values({
    matchId: match.id,
    userId: session.user.id,
    stripeSessionId: checkoutSession.id,
    amountCents,
    currency: "eur",
  });

  return { url: checkoutSession.url };
});
