import { z } from 'zod'

export const signUpSchema = z
  .object({
    confirmPassword: z.string().nonempty('Password confirmation is required'),

    email: z
      .string()
      .nonempty('Email is required')
      .regex(/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Invalid email format'),

    password: z
      .string()
      .nonempty('Password is required')
      .min(6, 'Min length is 6')
      .max(20, 'Max length is 20')
      .regex(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*]).{6,20}$/,
        'Password must include uppercase, lowercase, number, and special character'
      ),

    // Поле для чекбокса
    //TODO: не работает
    terms: z.boolean(),

    userName: z
      .string()
      .nonempty('Username is required')
      .min(6, 'Min length is 6')
      .max(30, 'Max length is 30')
      .regex(/^[\w_-]{6,30}$/, 'Invalid username (use letters, numbers, _, -)'),
  })
  //TODO: Тут тоже как то криво
  .refine(data => data.confirmPassword === data.password, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
  .refine(data => data.terms === true)
