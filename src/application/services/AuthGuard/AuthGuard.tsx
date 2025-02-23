'use client'

import { ReactNode, useEffect } from 'react'

import { useGetMeQuery } from '@/features/auth/api/authApi'
import { useRouter } from 'next/navigation'

export function AuthGuard({ children }: { children: ReactNode }) {
  const { isError, isSuccess } = useGetMeQuery()
  const router = useRouter()

  useEffect(() => {
    if (isSuccess) {
      router.push('/private/profile')
    }
    if (isError) {
      router.push('/public/posts')
    }
  }, [isError, isSuccess, router])

  return <>{children}</>
}
