import { db } from "~/server/db";
import { profiles } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const session = event.context.session;
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  const [profile] = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, session.user.id));

  if (!profile) {
    return { exists: false };
  }

  return profile;
});
