import { useEffect, useMemo } from 'react'

import { useGetGoogleOAuthMutation } from '@/features/auth/api/authApi'
import { setCookie } from 'cookies-next/client'
import { useRouter, useSearchParams } from 'next/navigation'

export function useGoogleOAuthLogin() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [getGoogleOAuthLogin] = useGetGoogleOAuthMutation()

  const code = useMemo(() => searchParams.get('code'), [searchParams])
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
            setCookie('accessToken', res.data.accessToken)
          }
        } catch (error) {
          console.error(error)
        }
      }
    }
    fetchGoogleOAuth()
  }, [getGoogleOAuthLogin, code, redirectUrl])

  return { loginWithGoogleOAuth }
}
