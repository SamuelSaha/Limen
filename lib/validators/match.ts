import { z } from "zod";

export const respondToMatchSchema = z.object({
  matchId: z.string().uuid(),
  action: z.enum(["accept", "decline"]),
  reason: z.string().max(500).optional(), // required on decline, learning data
});

export type RespondToMatchInput = z.infer<typeof respondToMatchSchema>;
