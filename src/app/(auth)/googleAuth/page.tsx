'use client'

import { useEffect } from 'react'

import { useAppDispatch } from '@/application/hooks/hooks'
import { setIsLoggedIn } from '@/application/model/app/appSlice'
import { useGetGoogleOAuthMutation } from '@/features/auth/api/authApi'
import { useRouter, useSearchParams } from 'next/navigation'

export default function GoogleAuthPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const code = searchParams.get('code')
  const [getGoogleOAuthLogin] = useGetGoogleOAuthMutation()
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
  }, [router, code, redirectUrl, dispatch])
}
