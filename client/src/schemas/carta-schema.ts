import { z } from "zod";


export const cartaCreateSchema = z.object({
    descricao: z.string(),
    destinatario: z.string(),
    remetente: z.string().optional(),
    urlQrCode: z.string().optional(),
    token: z.string().optional(),
    title: z.string(),
    id: z.string().optional(),
})
export const cartaUpdateSchema = z.object({
    descricao: z.string(),
    destinatario: z.string(),
    remetente: z.string().optional(),
    urlQrCode: z.string(),
    token: z.string(),
    title: z.string(),
    id: z.string(),
})