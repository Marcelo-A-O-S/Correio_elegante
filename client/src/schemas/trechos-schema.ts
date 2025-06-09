import { z } from "zod"; 

export const trechoCreateSchema = z.object({
    id: z.string().optional(),
    content: z.string(),
    imageUrl: z.string().optional(),
    cartaId: z.string()
})
export const trechoUpdateSchema = z.object({
    id: z.string(),
    content: z.string(),
    imageUrl: z.string().optional(),
    cartaId: z.string()
})