import Stripe from "stripe";
import { db } from "~/server/db";
import { payments, matches } from "~/server/db/schema";
import { eq } from "drizzle-orm";

/**
 * Stripe webhook handler.
 * Listens for checkout.session.completed to confirm payments.
 */
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const stripe = new Stripe(config.stripeSecretKey);

  const body = await readRawBody(event);
  const sig = getHeader(event, "stripe-signature");

  if (!body || !sig) {
    throw createError({ statusCode: 400, statusMessage: "Missing body or signature" });
  }

  let stripeEvent: Stripe.Event;
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      body,
      sig,
      config.stripeWebhookSecret
    );
  } catch {
    throw createError({ statusCode: 400, statusMessage: "Invalid signature" });
  }

  if (stripeEvent.type === "checkout.session.completed") {
    const session = stripeEvent.data.object as Stripe.Checkout.Session;
    const matchId = session.metadata?.matchId;

    if (matchId) {
      await db
        .update(payments)
        .set({
          status: "paid",
          stripePaymentIntentId: session.payment_intent as string,
          paidAt: new Date(),
        })
        .where(eq(payments.stripeSessionId, session.id));

      // TODO: send confirmation email via Resend
      // TODO: trigger intro email to both parties
    }
  }

  return { received: true };
});
