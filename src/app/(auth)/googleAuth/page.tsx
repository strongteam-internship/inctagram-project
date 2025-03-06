'use client'

import { Suspense } from 'react'

import { GoogleAuthPage } from '@/layers/auth/GooglePage/GoogleAuthPage'

export default function GooglePage() {
  return (
    <Suspense>
      <GoogleAuthPage />
    </Suspense>
  )
}
