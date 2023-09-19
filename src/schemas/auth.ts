import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().min(1, { message: "El campo email es obligatorio" }),
  password: z.string().min(1, { message: "El campo password es obligatorio" }),
});

export const signUpSchema = z.object({
  email: z
    .string({ required_error: "El campo email es obligatorio" })
    .email({ message: "Formato de email incorrecto" })
    .min(1, { message: "El campo email es obligatorio" }),
  password: z
    .string({ required_error: "El campo password es obligatorio" })
    .min(5, { message: "La contraseña debe contener al menos 5 caracteres" }),
});

export const resetPasswordSchema = z.object({
  email: z
    .string({ required_error: "El campo email es obligatorio" })
    .email({ message: "Formato de email incorrecto" })
    .min(1, { message: "El campo email es obligatorio" }),
});

export const updatePasswordSchema = z.object({
  password: z
    .string({ required_error: "El campo email es obligatorio" })
    .min(1, { message: "El campo password es obligatorio" }),
});
