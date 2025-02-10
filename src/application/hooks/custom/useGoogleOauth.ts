import { useEffect, useMemo } from 'react'

import { useGetGoogleOAuth2Mutation } from '@/features/auth/api/authApi'
import { useRouter, useSearchParams } from 'next/navigation'

export function useGoogleOAuthLogin() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [getGoogleOAuthLogin] = useGetGoogleOAuth2Mutation()

  const code = useMemo(() => searchParams.get('code'), [searchParams])
  const scope = 'email'
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
  const redirectUrl = 'http://localhost:3000'
  const redirectUrl1 = 'https://strong-interns.top'
  const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=code&redirect_uri=${redirectUrl}&client_id=${CLIENT_ID}&prompt=consent`

  function login() {
    router.push(url)
  }

  useEffect(() => {
    async function fetchGoogleOAuth2() {
      if (code) {
        console.log('code', code)
        try {
          const res = await getGoogleOAuthLogin({ code: code, redirectUrl: redirectUrl1 })

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
