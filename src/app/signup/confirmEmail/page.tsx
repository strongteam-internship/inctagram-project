'use client'
import { Suspense } from 'react'

import { ConfirmEmailPage } from '@/layers/registration/ConfirmEmailPage/ConfirmEmailPage'
export default function confirmEmail() {
  return (
    <Suspense>
      <ConfirmEmailPage />
    </Suspense>
  )
}
