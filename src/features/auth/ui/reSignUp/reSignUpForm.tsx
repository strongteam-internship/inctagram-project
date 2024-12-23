'use client'

import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { Form } from '@/shared/form/form'
import { Input } from '@/shared/input'
import { Typography } from '@/shared/typography/typography'
import Image from 'next/image'

export function ReSignUpForm() {
  return (
    <Form onSubmit={data => console.log('Re-form data', data)}>
      <Card>
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
        <div style={{ margin: '20px 0', textAlign: 'center' }}>
          <Image alt={'Email verification'} height={200} src={'./rafiki.png'} width={200} />
        </div>
      </Card>
    </Form>
  )
}
