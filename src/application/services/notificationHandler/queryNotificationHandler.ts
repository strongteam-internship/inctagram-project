import { showToastError } from '@/features/auth/api/showToastError'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export const queryNotificationHandler = (
  response: FetchBaseQueryError | SerializedError | undefined
) => {
  if (response && 'status' in response) {
    if (typeof response.data === 'object' && response.data && 'message' in response.data) {
      const errorMessage = response.data.message as string

      showToastError(errorMessage)
    } else if ('error' in response) {
      showToastError(response.error)
    }
  } else {
    showToastError('Произошла ошибка. Попробуйте позже.')
  }
}
