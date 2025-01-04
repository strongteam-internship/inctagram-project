import { z } from 'zod'

export const signInSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required') // Поле не должно быть пустым
    .regex(/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Invalid email format'), // Валидация формата email

  password: z
    .string()
    .nonempty('Password is required') // Обязательное поле
    .min(6, 'Min length is 6') // Минимальная длина
    .max(20, 'Max length is 20') // Максимальная длина
    .regex(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*]).{6,20}$/,
      'Password must include uppercase, lowercase, number, and special character'
    ),
})
