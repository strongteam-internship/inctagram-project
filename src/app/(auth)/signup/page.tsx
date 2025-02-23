'use client'
import { Suspense } from 'react'

import { SignUpPage } from '@/layers/auth/SignUpPage/SignUpPage'

export default function SignUp() {
  return (
    <Suspense>
      <SignUpPage />
    </Suspense>
  )
}
