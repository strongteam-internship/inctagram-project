'use client'

import { Button } from '@/shared/button/button'
import { Typography } from '@/shared/typography/typography'
import { useRouter } from 'next/navigation'

import s from './EmailConfirmationPage.module.scss'

export default function EmailConfirmationPage() {
  const router = useRouter()

  return (
    <div className={s.page}>
      <div className={s.container}>
        <Typography align={'center'} variant={'H1'}>
          Congratulations!
        </Typography>
        <Typography align={'center'} variant={'regular_text_16'}>
          Your email has been confirmed
        </Typography>
        <Button className={s.button} onClick={() => router.push('/signin')} variant={'primary'}>
          Sign In
        </Button>
      </div>
    </div>
  )
}
