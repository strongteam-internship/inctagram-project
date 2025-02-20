import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export type AppErrorResponse<T> = {
  data: {
    error: string
    messages: T
    statusCode: number
  }
} & Omit<FetchBaseQueryError, 'data'>
