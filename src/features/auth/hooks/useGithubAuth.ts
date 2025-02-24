import { useRouter } from 'next/navigation'

export const useGithubAuth = () => {
  const router = useRouter()

  const loginGithubHandler = () => {
    const redirectUrl = encodeURIComponent('https://strong-interns.top/')

    router.push(`https://inctagram.work/api/v1/auth/github/login?redirect_url=${redirectUrl}`)
  }

  return { loginGithubHandler }
}
