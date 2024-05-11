import { z } from 'zod';

export const newsSchema = z.object({
    title: z
    .string()
    .min(1, { message: "Por favor, insira um título." })
    .refine((value) => !/^\s*$/.test(value), { message: "Por favor, insira um título." }),
    banner: z
    .string()
    .min(1, { message: "Por favor, insira um link para o banner." })
    .refine((value) => !/^\s*$/.test(value), { message: "Por favor, insira um link para o banner." }),
    text: z
    .string()
    .min(1, { message: "Por favor, insira um texto." })
    .refine((value) => !/^\s*$/.test(value), { message: "Por favor, insira um texto." }),
});