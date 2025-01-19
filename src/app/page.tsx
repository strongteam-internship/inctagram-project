'use client'
import { useEffect } from 'react'

import { useAppSelector } from '@/application/hooks/hooks'
import { Typography } from '@/shared/typography/typography'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const isLogIn = useAppSelector(state => state.app.isLoggedIn)

  useEffect(() => {
    if (!isLogIn) {
      router.push('/signin')
    }
  }, [isLogIn, router])

  return (
    <div>
      TEST
      <div>
        <Link href={'/profile'}>Profile</Link>
      </div>
      <div>
        <Link href={'/signup'}>Sign Up</Link>
      </div>
      <div>
        <Link href={'/signin'}>Sign In</Link>
      </div>
      <div>
        <Link href={'/resignup'}>Re-Sign Up</Link>
      </div>
      <Typography>Hello world</Typography>
    </div>
  )
}
