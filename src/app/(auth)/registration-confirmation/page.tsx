'use client'
import { Suspense } from 'react'

import { ConfirmEmailPage } from '@/layers/auth/ConfirmEmailPage/ConfirmEmailPage'
export default function confirmEmail() {
  return (
    <Suspense>
      <ConfirmEmailPage />
    </Suspense>
  )
}
