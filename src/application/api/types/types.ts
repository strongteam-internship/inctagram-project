import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { ZodType, z } from 'zod'

export type AppErrorResponse<T> = {
  data: {
    error: string
    messages: T
    statusCode: number
  }
} & Omit<FetchBaseQueryError, 'data'>

export type ErrorMessage<T extends z.infer<ZodType<any, any, any>>> =
  | {
      field: keyof T
      message: string
    }
  | string
