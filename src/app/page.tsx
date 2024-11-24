'use client'
import Link from 'next/link'
import { Typography } from '@/shared/typography/typography'

export default function Home() {
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
      <Typography>Hello world</Typography>
    </div>
  )
}
