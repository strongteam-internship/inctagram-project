import { z } from 'zod'

export const signUpSchema = z
  .object({
    agreeToPolicies: z
      .boolean()
      .refine(value => value, { message: 'You must agree to the policies' }),

    confirmPassword: z.string().nonempty('Password confirmation is required'),

    email: z.string().nonempty('Email is required').email('Invalid email format'),

    password: z
      .string()
      .nonempty('Password is required')
      .min(6, 'Min length is 6')
      .max(20, 'Max length is 20')
      .regex(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*]).{6,20}$/,
        'Password must include uppercase, lowercase, number, and special character'
      ),

    userName: z
      .string()
      .nonempty('Username is required')
      .min(6, 'Min length is 6')
      .max(30, 'Max length is 30')
      .regex(/^[\w_-]{6,30}$/, 'Invalid username (use letters, numbers, _, -)'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // Поле, к которому относится ошибка
  })

export type SignUpSchemaType = z.infer<typeof signUpSchema>
