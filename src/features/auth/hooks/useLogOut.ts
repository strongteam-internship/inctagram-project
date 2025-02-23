import { useEffect } from 'react'

import { useGetLogOutMutation } from '@/features/auth/api/authApi'
import { useRouter } from 'next/navigation'

export const useLogOut = () => {
  const router = useRouter()
  const [getLogOut, { isSuccess }] = useGetLogOutMutation()

  const handleLogOut = () => {
    getLogOut()
  }

  useEffect(() => {
    if (isSuccess) {
      router.push(`/public/posts`)
    }
  }, [isSuccess, router])

  return { handleLogOut }
}
