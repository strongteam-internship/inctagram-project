'use client'
import { Typography } from '@/shared/typography/typography'
import Link from 'next/link'

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
      <div>
        <Link href={'/resignup'}>Re-Sign Up</Link>
      </div>
      <Typography>Hello world</Typography>
    </div>
  )
}
