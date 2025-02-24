import { useEffect } from 'react'
import { UseFormSetError } from 'react-hook-form'

import { isErrorResponse } from '@/application/utils/typeGuards/typeGuards'
import { useGetNewPasswordMutation } from '@/features/auth/api/authApi'
import { recoveryPasswordSchema } from '@/features/auth/utils/validationRules/zodSchema'
import { z } from 'zod'

type Props = {
  errorHandler: UseFormSetError<{
    confirmPassword: string
    newPassword: string
  }>
  successHandler: () => void
}

export function useGetNewPassword({ errorHandler, successHandler }: Props) {
  const [getNewPassword, { error, isError, isSuccess }] = useGetNewPasswordMutation()

  useEffect(() => {
    if (isError) {
      if (
        isErrorResponse<
          Array<{ field: keyof z.infer<typeof recoveryPasswordSchema>; message: string }>
        >(error)
      ) {
        error.data.messages.forEach(({ field, message }) => {
          errorHandler(field, { message: message })
        })
      }
    }
  }, [isError, error, errorHandler])

  useEffect(() => {
    if (isSuccess) {
      successHandler()
    }
  }, [isSuccess, successHandler])

  return { getNewPassword }
}
