import { useEffect } from 'react'

import { useGetGoogleOAuth2Mutation } from '@/features/auth/api/authApi'
import { useRouter, useSearchParams } from 'next/navigation'

export function useGoogleOAuthLogin() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [getGoogleOAuthLogin] = useGetGoogleOAuth2Mutation()

  const code = searchParams.get('code')
  const scope = 'email'
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
  const redirectUrl = 'http://localhost:3000'
  const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=code&redirect_uri=${redirectUrl}&client_id=${CLIENT_ID}`

  function login() {
    router.push(url)
  }

  useEffect(() => {
    async function fetchGoogleOAuth2() {
      if (code) {
        console.log('code', code)
        try {
          const res = await getGoogleOAuthLogin({ code: code, redirectUrl: redirectUrl })

          console.log('res', res)
        } catch (error) {
          console.error(error)
        }
      }
    }
    fetchGoogleOAuth2()
  }, [getGoogleOAuthLogin, code, redirectUrl])

  return { login }
}
