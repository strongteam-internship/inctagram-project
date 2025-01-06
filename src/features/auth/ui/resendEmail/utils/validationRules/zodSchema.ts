import { z } from 'zod'

export const resendEmailSchema = z.object({
  email: z.string().nonempty('Email is required').email('Invalid email format'),
})
