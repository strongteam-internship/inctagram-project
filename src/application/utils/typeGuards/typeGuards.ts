import { AppErrorResponse } from '@/application/api/types/types'

export function isErrorResponse<T>(errorRes: unknown): errorRes is AppErrorResponse<T> {
  return (
    typeof errorRes === 'object' &&
    errorRes !== null &&
    'data' in errorRes &&
    typeof errorRes.data === 'object' &&
    errorRes.data !== null &&
    'error' in errorRes.data &&
    typeof errorRes.data.error === 'string' &&
    'messages' in errorRes.data &&
    'status' in errorRes &&
    typeof errorRes.status === 'number'
  )
}
