import { z } from 'zod';

// Schema
export const signinSchema = z.object({
    email: z
    .string()
    .email({ message: "Email inválido" })
    .toLowerCase(),
    password: z
    .string()
    .min(6, { message: "Sua senha deve ter no mínimo 6 caracteres" })
});