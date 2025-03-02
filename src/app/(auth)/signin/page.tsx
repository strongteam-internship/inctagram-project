'use client'
import { Suspense } from 'react'

import { SignInPage } from '@/layers/auth/SignInPage/SignInPage'

export default function SignIn() {
  return (
    <Suspense>
      <SignInPage />
    </Suspense>
  )
}
