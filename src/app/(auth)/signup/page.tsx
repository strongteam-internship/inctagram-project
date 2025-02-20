'use client'
import { Suspense } from 'react'

import { SignUpPage } from '@/layers/registration/SignUpPage/SignUpPage'

export default function SignUp() {
  return (
    <Suspense>
      <SignUpPage />
    </Suspense>
  )
}
