import { db } from "~/server/db";
import { profiles } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { updateProfileSchema } from "~/lib/validators/profile";

export default defineEventHandler(async (event) => {
  const session = event.context.session;
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  const body = await readBody(event);
  const parsed = updateProfileSchema.safeParse(body);

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Validation failed",
      data: parsed.error.flatten(),
    });
  }

  const [existing] = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, session.user.id));

  if (existing) {
    const [updated] = await db
      .update(profiles)
      .set({ ...parsed.data, updatedAt: new Date() })
      .where(eq(profiles.userId, session.user.id))
      .returning();
    return updated;
  }

  const [created] = await db
    .insert(profiles)
    .values({ userId: session.user.id, ...parsed.data })
    .returning();

  return created;
});
