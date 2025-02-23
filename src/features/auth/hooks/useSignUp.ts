import { useEffect } from 'react'
import { UseFormSetError, useForm, useFormContext } from 'react-hook-form'

import { isErrorResponse } from '@/application/utils/typeGuards/typeGuards'
import { useGetSignUpMutation } from '@/features/auth/api/authApi'
import { useGithubAuth } from '@/features/auth/hooks/useGithubAuth'
import { useGoogleOAuthLogin } from '@/features/auth/hooks/useGoogleOauth'
import { signUpSchema } from '@/features/auth/utils/validationRules/zodSchema'
import { z } from 'zod'

export const useSignUp = ({
  errorHandler,
  successHandler,
}: {
  errorHandler: UseFormSetError<{
    agreeToPolicies: boolean
    confirmPassword: string
    email: string
    password: string
    userName: string
  }>
  successHandler: () => void
}) => {
  const { loginWithGoogleOAuth } = useGoogleOAuthLogin()
  const { loginGithubHandler } = useGithubAuth()
  const [getSignUp, { error, isError, isSuccess }] = useGetSignUpMutation()

  useEffect(() => {
    if (isError) {
      if (
        isErrorResponse<Array<{ field: keyof z.infer<typeof signUpSchema>; message: string }>>(
          error
        )
      ) {
        error.data.messages.forEach(({ field, message }) => {
          console.log(message)
          errorHandler(field, { message: message })
        })
      }
    }
  }, [isError, error, errorHandler])

  useEffect(() => {
    if (isSuccess) {
      console.log('successHandler')
      successHandler()
    }
  }, [isSuccess, successHandler])

  return { getSignUp, loginGithubHandler, loginWithGoogleOAuth }
}
