import { z } from 'zod'

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required') // Поле не должно быть пустым
    .regex(/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Invalid email format'), // Валидация формата email
})

export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>
