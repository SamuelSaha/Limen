import { db } from "~/server/db";
import { listings, profiles } from "~/server/db/schema";
import { eq, and, sql } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const city = query.city as string | undefined;
  const intent = query.intent as "host" | "travel" | undefined;

  const conditions = [eq(listings.active, true)];

  if (city) {
    conditions.push(sql`lower(${listings.city}) = lower(${city})`);
  }
  if (intent) {
    conditions.push(eq(listings.intentType, intent));
  }

  const results = await db
    .select()
    .from(listings)
    .where(and(...conditions))
    .orderBy(sql`${listings.createdAt} DESC`)
    .limit(50);

  return results;
});
