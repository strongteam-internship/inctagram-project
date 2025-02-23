import { useEffect } from 'react'
import { UseFormSetError } from 'react-hook-form'

import { ErrorMessage } from '@/application/api/types/types'
import { isErrorResponse } from '@/application/utils/typeGuards/typeGuards'
import { useGetPasswordRecoveryMutation } from '@/features/auth/api/authApi'
import { ForgotPasswordSchemaType } from '@/features/auth/utils/validationRules/zodSchema'

type Props = {
  errorHandler: UseFormSetError<ForgotPasswordSchemaType>
  successHandler: (email: string) => void
}

export function usePasswordRecovery({ errorHandler, successHandler }: Props) {
  const [getPassword, { error, isError, isSuccess }] = useGetPasswordRecoveryMutation()
  const baseUrl = process.env.NEXT_PUBLIC_PRODUCT_URL as string
  let emailRes = ''

  useEffect(() => {
    if (isError) {
      if (isErrorResponse<ErrorMessage<string>>(error)) {
        errorHandler('email', { message: error.data.messages as string })
      }
    }
  }, [isError, error, errorHandler])
  function getPasswordRecovery({ email, recaptcha }: { email: string; recaptcha: string }) {
    emailRes = email
    getPassword({ baseUrl, email, recaptcha })
  }

  useEffect(() => {
    if (isSuccess) {
      successHandler(emailRes)
    }
  }, [successHandler, emailRes, isSuccess])

  return { getPasswordRecovery }
}
