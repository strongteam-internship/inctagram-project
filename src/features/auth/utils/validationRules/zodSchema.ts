import { z } from 'zod'

const authBaseSchema = z.object({
  agreeToPolicies: z
    .boolean()
    .refine(value => value, { message: 'You must agree to the policies' }),

  confirmPassword: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Min length is 6')
    .max(20, 'Max length is 20'),

  email: z.string().nonempty('Email is required').email('Invalid email format'),

  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Min length is 6')
    .max(20, 'Max length is 20')
    .regex(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!$%^&+=.\-_*]).{6,20}$/,
      'Password must include uppercase, lowercase, number, and special character'
    ),

  userName: z
    .string()
    .nonempty('Username is required')
    .min(6, 'Min length is 6')
    .max(30, 'Max length is 30')
    .regex(/^[\w_-]{6,30}$/, 'Invalid username (use letters, numbers, _, -)'),
})

export const signUpSchema = authBaseSchema.refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export const signInSchema = z.object({
  email: authBaseSchema.shape.email,
  password: authBaseSchema.shape.password,
})
export const forgotPasswordSchema = z.object({
  email: authBaseSchema.shape.email,
})

export const recoveryPasswordSchema = z
  .object({
    confirmPassword: authBaseSchema.shape.confirmPassword,
    password: authBaseSchema.shape.password,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type SignInSchemaType = z.infer<typeof signInSchema>
export type RecoveryPasswordSchemaType = z.infer<typeof recoveryPasswordSchema>
export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>
export type SignUpSchemaType = z.infer<typeof signUpSchema>
