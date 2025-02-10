'use client'

import resendEmailImage from '@/assets/images/resendEmailImage.png'
import { Button } from '@/shared/button/button'
import { Typography } from '@/shared/typography/typography'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import s from './PasswordRecovery.module.scss'

export function PasswordRecovery() {
  const router = useRouter()

  const onClickHandler = () => {
    router.push('/auth/forgot-password')
  }

  return (
    <div className={s.page}>
      <div className={s.container}>
        <Typography align={'center'} variant={'H1'}>
          Email verification link expired
        </Typography>
        <Typography align={'center'} variant={'regular_text_16'}>
          Looks like the verification link has expired. Not to worry, we can send the link again
        </Typography>
        <Button className={s.button} onClick={onClickHandler} variant={'primary'}>
          Resend link
        </Button>
        <div className={s.imgWrapper}>
          <Image alt={'Password recovery'} height={352} src={resendEmailImage} width={473} />
        </div>
      </div>
    </div>
  )
}
