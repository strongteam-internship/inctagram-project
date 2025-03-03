import { useEffect, useMemo } from 'react'

import { useAppDispatch } from '@/application/hooks/hooks'
import { setIsLoggedIn } from '@/application/model/app/appSlice'
import { useGetGoogleOAuthMutation } from '@/features/auth/api/authApi'
import { useRouter, useSearchParams } from 'next/navigation'

export function useGoogleOAuthLogin() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dispatch = useAppDispatch()
  const [getGoogleOAuthLogin] = useGetGoogleOAuthMutation()

  const code = searchParams.get('code')
  const scope = 'email profile'
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
  const redirectUrl = 'https://strong-interns.top'
  const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=code&redirect_uri=${redirectUrl}&client_id=${CLIENT_ID}&prompt=consent`

  function loginWithGoogleOAuth() {
    router.push(url)
  }

  useEffect(() => {
    async function fetchGoogleOAuth() {
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
      }
    }
    fetchGoogleOAuth()
  }, [getGoogleOAuthLogin, code, redirectUrl, dispatch, router])

  return { loginWithGoogleOAuth }
}
