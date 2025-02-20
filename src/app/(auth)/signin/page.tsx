'use client'
import { Suspense } from 'react'

import { SignInPage } from '@/layers/registration/SignInPage/SignInPage'

export default function SignIn() {
  return (
    <Suspense>
      <SignInPage />
    </Suspense>
  )
}
