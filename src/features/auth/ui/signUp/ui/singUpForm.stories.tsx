import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { Checkbox } from '@/shared/checkbox/Checkbox'
import { Form } from '@/shared/form/form'
import { Input } from '@/shared/input'
import { Typography } from '@/shared/typography/typography'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Sign Up/Form',
}

export default meta

type Story = StoryObj<typeof Form>
export function SignInForm() {
  return (
    <Form onSubmit={e => console.log('Form data:', e)}>
      <Card>
        <Typography align={'center'} variant={'H1'}>
          Sing Up
        </Typography>
        <Input label={'Username'} variant={'text'} />
        <Input label={'Email'} variant={'text'} />
        <Input label={'Password'} variant={'password'} />
        <Input label={'Password confirmation'} variant={'password'} />
        <div>
          <Checkbox>
            <Checkbox.Input />
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
