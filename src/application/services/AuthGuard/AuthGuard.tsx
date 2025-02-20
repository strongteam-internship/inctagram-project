'use client'

import { ReactNode } from 'react'

import { useGetMeQuery } from '@/features/auth/api/authApi'
import { useRouter } from 'next/navigation'

export function AuthGuard({ children }: { children: ReactNode }) {
  const { isError } = useGetMeQuery()
  const router = useRouter()

  isError ? router.push('/public/posts') : router.push('/private/profile')

  return <>{children}</>
}
