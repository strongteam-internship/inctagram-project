'use client'
import { useGoogleOAuthLogin } from '@/application/hooks/custom/useGoogleOauth'
import { useGetMeQuery } from '@/features/auth/api/authApi'
import { SignInForm } from '@/features/auth/ui/signIn/ui/SignIn'
import { useRouter } from 'next/navigation'

import s from './SignInPage.module.scss'

export function SignInPage() {
  const { loginWithGoogleOAuth } = useGoogleOAuthLogin()
  const { data } = useGetMeQuery()
  const router = useRouter()

  if (data) {
    router.push('/profile')
  }

  return (
    <div className={s.container}>
      <SignInForm loginWithGoogleAction={loginWithGoogleOAuth} />
    </div>
  )
}
