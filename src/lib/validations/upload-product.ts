import { z } from 'zod';

export const uploadProductSchema = z.object({
  itemName: z.string().min(3, 'Item name must be at least 3 characters'),
  category: z.string().min(1, 'Category is required'),
  condition: z.string().min(1, 'Condition is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  basePrice: z.coerce.number().min(0, 'Base price is required'),
  discountPrice: z.coerce.number().min(0).optional(),
  startingBidPrice: z.coerce.number().min(1, 'Starting bid price is required'),
  buyItNowPrice: z.coerce.number().optional(),
  reservePrice: z.coerce.number().optional(),
  quantity: z.coerce.number().min(1, 'Quantity is required'),
  deliveryType: z.string().min(1, 'Delivery type is required'),
  handlingTime: z.string().min(1, 'Handling time is required'),
  length: z.coerce.number().optional(),
  width: z.coerce.number().optional(),
  height: z.coerce.number().optional(),
  weight: z.coerce.number().optional(),
  files: z.array(z.instanceof(File)).min(1, 'At least one file is required'),
});

export type UploadProductFormValues = z.infer<typeof uploadProductSchema>;
