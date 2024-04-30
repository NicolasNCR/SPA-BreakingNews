import { z } from 'zod';

// Schema
export const signupSchema = z.object({
    name: z
    .string()
    .min(3, { message: "Seu nome deve ter no mínimo 3 caracteres" })
    .transform((name) => 
        name
        .trim()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    ),
    email: z
    .string()
    .email({ message: "Email inválido" })
    .toLowerCase(),
    password: z
    .string()
    .min(6, { message: "Sua senha deve ter no mínimo 6 caracteres" }),
    confirmPassword: z
    .string()
    .min(6, { message: "Sua senha deve ter no mínimo 6 caracteres" })
    
    // "data" é o objeto que está sendo e será mandado para realizar a validação
}).refine((data) => data.password === data.confirmPassword, { 
    message: "As senhas não correspondem",
    path: ["confirmPassword"] // local do erro
});