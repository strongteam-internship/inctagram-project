'use client'
import { useEffect } from 'react'

import { useGetEmailConfirmationMutation } from '@/features/auth/api/authApi'
import EmailConfirmation from '@/features/auth/ui/emailConfirmation/EmailConfirmation'
import { ResendEmailForm } from '@/features/auth/ui/resendEmail/resendEmailForm'
import { useSearchParams } from 'next/navigation'

export function ConfirmEmailPage() {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const [getEmailConfirm, { isError, isSuccess }] = useGetEmailConfirmationMutation()

  useEffect(() => {
    if (code) {
      getEmailConfirm(code)
    }
  }, [code, getEmailConfirm])

  return (
    <>
      {isSuccess && <EmailConfirmation />}
      {isError && <ResendEmailForm />}
    </>
  )
}
