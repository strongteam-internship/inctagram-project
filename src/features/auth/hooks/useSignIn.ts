import { useEffect } from 'react'
import { UseFormSetError, useForm } from 'react-hook-form'

import { ErrorMessage } from '@/application/api/types/types'
import { isErrorResponse } from '@/application/utils/typeGuards/typeGuards'
import { useGetSignInMutation } from '@/features/auth/api/authApi'
import { useGithubAuth } from '@/features/auth/hooks/useGithubAuth'
import { useGoogleOAuthLogin } from '@/features/auth/hooks/useGoogleOauth'
import { useRouter } from 'next/navigation'

export function useSignIn({
  errorHandler,
}: {
  errorHandler: UseFormSetError<{ email: string; password: string }>
}) {
  const { loginGithubHandler } = useGithubAuth()
  const { loginWithGoogleOAuth } = useGoogleOAuthLogin()
  const router = useRouter()
  const { setError } = useForm()
  const [getSignIn, { error, isError, isSuccess }] = useGetSignInMutation()

  useEffect(() => {
    if (isError) {
      if (isErrorResponse<ErrorMessage<string>>(error)) {
        errorHandler('password', { message: error.data.messages as string })
      }
    }
  }, [isError, setError, error, errorHandler])

  useEffect(() => {
    if (isSuccess) {
      router.push('/private/profile')
    }
  }, [router, isSuccess])

  return { getSignIn, loginGithubHandler, loginWithGoogleOAuth }
}
