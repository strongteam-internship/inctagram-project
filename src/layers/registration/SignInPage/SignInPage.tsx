'use client'
import { useGoogleOAuthLogin } from '@/application/hooks/custom/useGoogleOauth'
import { SignInForm } from '@/features/auth/ui/signIn/ui/SignIn'

import s from './SignInPage.module.scss'

export function SignInPage() {
  const { login } = useGoogleOAuthLogin()

  return (
    <div className={s.container}>
      <SignInForm login={login} />
    </div>
  )
}
