import { z } from "zod";

export const productValidationSchema =  z.object({
   body:z.object({
    image: z.string().url("Invalid URL format"),
    title: z.string().min(1, "Title is required"),
    price: z.string().min(1, "Price is required"),
    category: z.string().min(1, "Category is required"),
    description: z.string().min(1, "Description is required"),
    quantity: z.string().min(1, "Quantity is required"),
    rating: z.string().min(1, "Rating is required"),
    isDeleted: z.boolean().default(false)
   })
  });
export const productUpdateValidationSchema =  z.object({
   body:z.object({
    image: z.string().optional(),
    title: z.string().optional(),
    price: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    quantity: z.string().optional(),
    rating: z.string().optional(),
   })
  });