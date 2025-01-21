import { ErrorMessage, ErrorResponse } from '@/features/auth/utils/types/types'

export function isErrorMessage(errorMessage: unknown): errorMessage is ErrorMessage<unknown> {
  return (
    typeof errorMessage === 'object' &&
    errorMessage !== null &&
    'field' in errorMessage &&
    'message' in errorMessage &&
    typeof errorMessage.field === 'string' &&
    typeof errorMessage.message === 'string'
  )
}

export function isErrorResponse(errorRes: unknown): errorRes is ErrorResponse {
  return (
    typeof errorRes === 'object' &&
    errorRes !== null &&
    'data' in errorRes &&
    typeof errorRes.data === 'object' &&
    errorRes.data !== null &&
    'error' in errorRes.data &&
    typeof errorRes.data.error === 'string' &&
    'messages' in errorRes.data &&
    Array.isArray(errorRes.data.messages) &&
    errorRes.data.messages.every(message => isErrorMessage(message)) &&
    'status' in errorRes &&
    typeof errorRes.status === 'number'
  )
}
