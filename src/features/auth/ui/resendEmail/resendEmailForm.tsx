'use client'

import resendEmailImage from '@/assets/images/resendEmailImage.png'
import { resendEmailSchema } from '@/features/auth/ui/resendEmail/utils/validationRules/zodSchema'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { Form } from '@/shared/form/Form'
import { Typography } from '@/shared/typography/typography'
import Image from 'next/image'

export function ResendEmailForm() {
  return (
    <Card>
      <Typography align={'center'} variant={'H1'}>
        Email verification link expired
      </Typography>
      <Typography align={'center'} variant={'regular_text_16'}>
        Looks like the verification link has expired. Not to worry, we can send the link again
      </Typography>
      <Form
        onSubmit={data => console.log('Re-form data', data)}
        validationRules={resendEmailSchema}
      >
        <Form.Body>
          <Form.TextField label={'Email'} name={'email'} variant={'text'} />
          <Button type={'submit'}>
            <Typography variant={'H3'}>Resend verification link</Typography>
          </Button>
        </Form.Body>
      </Form>
      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <Image alt={'Email verification'} height={352} src={resendEmailImage} width={473} />
      </div>
    </Card>
  )
}
