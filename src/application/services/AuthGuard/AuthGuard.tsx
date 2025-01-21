'use client'

import { ReactNode, useEffect } from 'react'

import { useAppSelector } from '@/application/hooks/hooks'
import { useRouter, useSearchParams } from 'next/navigation'

type AuthGuardProps = {
  children: ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  console.log('Guard !!!!!!!!!!')
  const router = useRouter()
  const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if (code) {
      console.log(code)
      router.push('/auth/registration-confirmation')
    } else if (!isLoggedIn) {
      router.push('/auth/signin')
    }
  }, [router, isLoggedIn])

  return <>{children}</>
}
