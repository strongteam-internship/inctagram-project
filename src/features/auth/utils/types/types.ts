import { ZodType, z } from 'zod'

export type ErrorResponse = {
  data: {
    error: string
    messages: Array<ErrorMessage<unknown>>
    statusCode: number
  }
  status: number
}
export type ErrorMessage<T extends z.infer<ZodType<any, any, any>>> = {
  field: keyof T
  message: string
}
