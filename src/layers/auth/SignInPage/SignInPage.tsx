'use client'

import { useGoogleOAuthLogin } from '@/features/auth/hooks/useGoogleOauth'
import { SignInForm } from '@/features/auth/ui/signIn/ui/SignIn'

import s from './SignInPage.module.scss'

export function SignInPage() {
  return (
    <div className={s.container}>
      <SignInForm />
    </div>
  )
}
