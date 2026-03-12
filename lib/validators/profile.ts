import { z } from "zod";

export const updateProfileSchema = z.object({
  bio: z.string().max(1000).optional(),
  linkedinUrl: z
    .string()
    .url()
    .refine((u) => u.includes("linkedin.com"), {
      message: "Must be a LinkedIn URL",
    })
    .optional(),
  languages: z.array(z.string().min(2).max(5)).max(10).optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
