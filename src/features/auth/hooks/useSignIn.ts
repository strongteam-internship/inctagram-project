import { useEffect } from 'react'
import { UseFormSetError } from 'react-hook-form'

import { ErrorMessage } from '@/application/api/types/types'
import { isErrorResponse } from '@/application/utils/typeGuards/typeGuards'
import { useGetSignInMutation } from '@/features/auth/api/authApi'
import { useGithubAuth } from '@/features/auth/hooks/useGithubAuth'
import { useRouter } from 'next/navigation'

type Props = {
  errorHandler: UseFormSetError<{ email: string; password: string }>
}

export function useSignIn({ errorHandler }: Props) {
  const { loginGithubHandler } = useGithubAuth()
  const router = useRouter()
  const [getSignIn, { error, isError, isSuccess }] = useGetSignInMutation()

  useEffect(() => {
    if (isError) {
      if (isErrorResponse<ErrorMessage<string>>(error)) {
        errorHandler('password', { message: error.data.messages as string })
      }
    }
  }, [isError, error, errorHandler])

  useEffect(() => {
    if (isSuccess) {
      router.push('/private/profile')
    }
  }, [router, isSuccess])

  return { getSignIn, loginGithubHandler }
}
