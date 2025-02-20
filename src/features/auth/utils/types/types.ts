import { ZodType, z } from 'zod'

export type ErrorMessage<T extends z.infer<ZodType<any, any, any>>> =
  | {
      field: keyof T
      message: string
    }
  | string
