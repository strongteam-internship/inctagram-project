'use client'

import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { Checkbox } from '@/shared/checkbox/Checkbox'
import { Form } from '@/shared/form/form'
import { Input } from '@/shared/input'
import { Typography } from '@/shared/typography/typography'

export function SignUpForm() {
  return (
    <Form onSubmitAction={data => console.log('Form data:', data)}>
      <Card>
        <Typography align={'center'} variant={'H1'}>
          Sing Up
        </Typography>
        <Input label={'Username'} name={'userName'} required variant={'text'} />
        <Input label={'Email'} name={'email'} required variant={'text'} />
        <Input label={'Password'} name={'password'} required variant={'password'} />
        <Input label={'Password confirmation'} required variant={'password'} />
        <div>
          <Checkbox isRequired>
            <Checkbox.Input name={'confirm'} />
            <Checkbox.Label>
              <Typography>I agree to the Terms of Service and Privacy Policy</Typography>
            </Checkbox.Label>
          </Checkbox>
        </div>
        <Button type={'submit'}>Sing Up</Button>
        <Typography variant={'regular_text_16'}>Do you have an account?</Typography>
        <Button variant={'link'}>
          <Typography variant={'H3'}>Sign In</Typography>
        </Button>
      </Card>
    </Form>
  )
}
