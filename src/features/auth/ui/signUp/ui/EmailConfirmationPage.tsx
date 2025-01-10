'use client'

import { Button } from '@/shared/button/button'
import { Typography } from '@/shared/typography/typography'

import s from './EmailConfirmationPage.module.scss'

export default function EmailConfirmationPage() {
  return (
    <div className={s.page}>
      <div className={s.container}>
        <Typography align={'center'} variant={'H1'}>
          Congratulations!
        </Typography>
        <Typography align={'center'} variant={'regular_text_16'}>
          Your email has been confirmed
        </Typography>
        <Button className={s.button} type={'submit'}>
          Sign In
        </Button>
      </div>
    </div>
  )
}
