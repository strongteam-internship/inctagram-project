'use client'

import { useForm } from 'react-hook-form'

import resendEmailImage from '@/assets/images/resendEmailImage.png'
import { useGetResendEmailMutation } from '@/features/auth/api/authApi'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'
import Image from 'next/image'

export function ResendEmailForm() {
  const { control, handleSubmit } = useForm<{ email: string }>()
  const [getResendEmail] = useGetResendEmailMutation()
  const handler = ({ email }: { email: string }) => {
    console.log(email)
    getResendEmail(email)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(handler)}>
        <Typography align={'center'} variant={'H1'}>
          Email verification link expired
        </Typography>
        <Typography align={'center'} variant={'regular_text_16'}>
          Looks like the verification link has expired. Not to worry, we can send the link again
        </Typography>
        <ControlledInput
          control={control}
          label={'Email'}
          name={'email'}
          required
          variant={'text'}
        />
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
