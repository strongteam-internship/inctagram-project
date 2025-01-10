'use client'

import emailConfirmationImage from '@/assets/images/emailConfirmationImage.png'
import { Button } from '@/shared/button/button'
import { Typography } from '@/shared/typography/typography'
import Image from 'next/image'
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
        <div className={s.imgWrapper}>
          <Image alt={'Email confirmation'} height={352} src={emailConfirmationImage} width={473} />
        </div>
      </div>
    </div>
  )
}
