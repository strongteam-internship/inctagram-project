'use client'

import resendEmailImage from '@/assets/images/resendEmailImage.png'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { Form } from '@/shared/form/form'
import { Input } from '@/shared/input'
import { Typography } from '@/shared/typography/typography'
import Image from 'next/image'

export function ResendEmailForm() {
  return (
    <Card>
      <form onSubmit={data => console.log('Re-form data', data)}>
        <Typography align={'center'} variant={'H1'}>
          Email verification link expired
        </Typography>
        <Typography align={'center'} variant={'regular_text_16'}>
          Looks like the verification link has expired. Not to worry, we can send the link again
        </Typography>
        <Input label={'Email'} name={'email'} required variant={'text'} />
        <Button type={'submit'}>
          <Typography variant={'H3'}>Resend verification link</Typography>
        </Button>
      </form>
      <div>
        <Image alt={'Email verification'} height={352} src={resendEmailImage} width={473} />
      </div>
    </Card>
  )
}
