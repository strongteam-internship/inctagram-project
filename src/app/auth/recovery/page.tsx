'use client'

import { Suspense } from 'react'

import { PasswordRecoveryPage } from '@/layers/registration/PasswordRecoveryPage/PasswordRecoveryPage'

export default function SignUp() {
  return (
    <Suspense>
      <PasswordRecoveryPage />
    </Suspense>
  )
}
