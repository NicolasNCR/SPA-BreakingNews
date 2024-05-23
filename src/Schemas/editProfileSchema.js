import z from 'zod';

// Schemas
export const editProfileSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Seu nome deve ter no mínimo 3 caracteres" })
        .refine((value) => !/^\s*$/.test(value), { message: "Insira seu nome" })
        .transform((name) => 
            name
            .trim()
            .split(" ")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(" ")
        ),
    username: z
        .string()
        .min(3, { message: "Seu nome de usuário deve ter no mínimo 3 caracteres" })
        .refine((value) => !/^\s*$/.test(value), { message: "Insira seu nome de usuário" }),
    email: z
        .string()
        .email({ message: "Email inválido" })
        .toLowerCase(),
    avatar: z
        .string()
        .min(1, { message: "Insira um link para a imagem de perfil" })
        .refine((value) => !/^\s*$/.test(value), { message: "Insira um link para a imagem de perfil" }),
    background: z
        .string()
        .min(1, { message: "Insira um link para a imagem de fundo do perfil." })
        .refine((value) => !/^\s*$/.test(value), { message: "Insira um link para a imagem de fundo do perfil" }),
    password: z
        .string()
        .optional(),
    newPassword: z
        .string()
        .optional()
        .nullable()
        .refine((value) => !value || value.length >= 6, {
            message: "A nova senha deve ter no mínimo 6 caracteres"
        }),
    confirmNewPassword: z
        .string()
        .optional()
        .nullable()
        .refine((value) => !value || value.length >= 6, {
            message: "A nova senha deve ter no mínimo 6 caracteres"
        }),
}).refine((data) => (data.newPassword === data.confirmNewPassword), { 
    message: "As senhas não coincidem",
    path: ["confirmNewPassword"], // local do erro
}).refine((data) => {
    if ((data.newPassword || data.confirmNewPassword) && !data.password) {
        return false;
    }
    return true;
}, {
    message: "Insira sua senha",
    path: ["password"], // local do erro
});