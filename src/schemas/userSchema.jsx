import { z } from "zod";

// Definición del esquema de validación para el esquema de usuario
export const registerSchema = z.object({
  username: z.string().nonempty("Nombre de usuario requerido"),
  email: z.string().email("email no valido"),
  password: z.string()
    .min(8, "password debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "Debe contener al menos una letra mayúscula")
    .regex(/[0-9]/, "Debe contener al menos un número")
    .regex(/[a-z]/, "Debe contener al menos una letra minúscula")
    .regex(/[@#$%^&*]/, "Debe contener al menos un caracter especial"),
});
