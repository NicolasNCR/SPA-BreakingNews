import { z } from 'zod';

// Schema
export const searchSchema = z.object({
    title: z
    .string()
    .min(1, { message: "Por favor, digite algo para pesquisar." })
    .refine(value => !/^\s*$/.test(value), { message: "Por favor, digite algo para pesquisar." } ), // "/^\s*$/" é uma regex que confere se existem espaços (" ") em uma string
});
