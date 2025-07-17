import { z } from "zod"

export const bidSchema = z.object({
  bidAmount: z
    .string()
    .min(1, "Bid amount is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Please enter a valid bid amount",
    })
    .transform((val) => Number(val)), // This transform is now safe as CustomNumberInput passes unformatted string
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
})

export type BidFormData = z.infer<typeof bidSchema>

export const createBidValidation = (currentBid: number, minimumBid: number) => {
  return bidSchema.extend({
    bidAmount: z
      .string()
      .min(1, "Bid amount is required")
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Please enter a valid bid amount",
      })
      .refine((val) => Number(val) >= minimumBid, {
        message: `Minimum bid is ₦${minimumBid.toLocaleString()}`,
      })
      .refine((val) => Number(val) > currentBid, {
        message: `Your bid must be higher than the current bid of ₦${currentBid.toLocaleString()}`,
      })
      .transform((val) => Number(val)),
  })
}
