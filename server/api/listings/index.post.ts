import { createListingSchema } from "~/lib/validators/listing";
import { db } from "~/server/db";
import { listings } from "~/server/db/schema";

export default defineEventHandler(async (event) => {
  const session = event.context.session;
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  const body = await readBody(event);
  const parsed = createListingSchema.safeParse(body);

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Validation failed",
      data: parsed.error.flatten(),
    });
  }

  const [listing] = await db
    .insert(listings)
    .values({
      userId: session.user.id,
      ...parsed.data,
    })
    .returning();

  return listing;
});
