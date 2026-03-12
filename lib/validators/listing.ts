import { z } from "zod";

export const intentType = z.enum(["host", "travel"]);

export const createListingSchema = z
  .object({
    intentType,
    city: z.string().min(1).max(100),
    country: z.string().min(2).max(2), // ISO 3166-1 alpha-2
    dateFrom: z.string().date(),
    dateTo: z.string().date(),
    flexibilityDays: z.number().int().min(0).max(30).default(3),
    description: z.string().max(2000).optional(),
    budgetCents: z.number().int().positive().optional(),
  })
  .refine((d) => d.dateTo > d.dateFrom, {
    message: "End date must be after start date",
    path: ["dateTo"],
  });

export type CreateListingInput = z.infer<typeof createListingSchema>;
