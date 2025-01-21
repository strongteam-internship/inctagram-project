'use client'

import { ReactNode, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/application/hooks/hooks'
import { setIsLoggedIn } from '@/application/model/app/appSlice'
import { useRouter } from 'next/navigation'

type AuthGuardProps = {
  children: ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter()
  const isLogIn = useAppSelector(state => state.app.isLoggedIn)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const authToken = localStorage.getItem('token')

    if (!authToken) {
      dispatch(setIsLoggedIn(false))
      router.push('/auth/signin')
    }
  }, [router])

  return <>{children}</>
}
