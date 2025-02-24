'use client'

import { Suspense } from 'react'

import { PasswordRecoveryPage } from '@/layers/auth/PasswordRecoveryPage/PasswordRecoveryPage'

export default function SignUp() {
  return (
    <Suspense>
      <PasswordRecoveryPage />
    </Suspense>
  )
}
