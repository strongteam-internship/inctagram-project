import { useGetLogOutMutation } from '@/features/auth/api/authApi'
import { useRouter } from 'next/navigation'

export const useLogOut = () => {
  const router = useRouter()
  const [getLogOut] = useGetLogOutMutation()

  const handleLogOut = () => {
    getLogOut()
      .unwrap()
      .then(() => {
        localStorage.removeItem('token')
        router.push(`/auth/signin`)
      })
      .catch(error => {
        console.error('Ошибка при выходе:', error)
      })
  }

  return { handleLogOut }
}
