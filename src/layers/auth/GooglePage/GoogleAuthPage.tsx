'use client'

import React, { useEffect } from 'react'

import { useAppDispatch } from '@/application/hooks/hooks'
import { setIsLoggedIn } from '@/application/model/app/appSlice'
import { useGetGoogleOAuthMutation } from '@/features/auth/api/authApi'
import { useRouter, useSearchParams } from 'next/navigation'

export function GoogleAuthPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const code = searchParams.get('code')
  const [getGoogleOAuthLogin, { isLoading }] = useGetGoogleOAuthMutation()
  const redirectUrl = 'https://strong-interns.top/googleAuth'

  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchGoogleOAuthLogin() {
      if (code) {
        try {
          const res = await getGoogleOAuthLogin({ code: code, redirectUrl: redirectUrl })

          if (res.data?.accessToken) {
            localStorage.setItem('accessToken', res.data.accessToken)
            dispatch(setIsLoggedIn(true))
            router.push('/private/profile')
          }
        } catch (error) {
          console.error(error)
        }
      } else {
        throw new Error('Authorize code is missing')
      }
    }
    fetchGoogleOAuthLogin()
  }, [code, redirectUrl, dispatch, router, getGoogleOAuthLogin])

  return <>{isLoading && <p style={{ color: 'white' }}>Loading...</p>}</>
}
