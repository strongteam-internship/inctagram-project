import { useRouter } from 'next/navigation'

export function useGoogleOAuthLogin() {
  const router = useRouter()

  const scope = 'email profile'
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
  const redirectUrl = 'https://strong-interns.top/googleAuth'
  const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=code&redirect_uri=${redirectUrl}&client_id=${CLIENT_ID}&prompt=consent`

  function loginWithGoogleOAuth() {
    router.push(url)
  }

  return { loginWithGoogleOAuth }
}
