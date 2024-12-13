'use client'

import { useGetLoginMutation } from '@/features/auth/api/authApi'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { Form } from '@/shared/form/form'
import { Input } from '@/shared/input'
import { Typography } from '@/shared/typography/typography'

export function SignInForm() {
  const [getLogin, { isLoading }] = useGetLoginMutation()

  function isLoginData(
    formData: Record<string, boolean | string>
  ): formData is { email: string; password: string } {
    return (
      typeof formData.email !== 'undefined' &&
      typeof formData.password !== 'undefined' &&
      typeof formData.password === 'string' &&
      typeof formData.email === 'string'
    )
  }

  const handleLogIn = async (data: Record<string, boolean | string>) => {
    if (isLoginData(data)) {
      try {
        const res = await getLogin(data).unwrap()

        console.log('Login success', res)
      } catch (error) {
        console.log('Falied to login', error)
      }
    } else {
      throw new Error('Login failed.')
    }
  }

  return (
    <Form onSubmit={data => handleLogIn(data as { email: string; password: string })}>
      <Card>
        <Typography align={'center'} variant={'H1'}>
          Sing In
        </Typography>
        <Input label={'Email'} name={'email'} required variant={'text'} />
        <Input label={'Password'} name={'password'} required variant={'password'} />
        <Button type={'submit'}>Sing In</Button>
        <Typography variant={'regular_text_16'}>Don’t have an account?</Typography>
        <Button disabled={isLoading} variant={'link'}>
          <Typography variant={'H3'}>Sign Up</Typography>
        </Button>
      </Card>
    </Form>
  )
}
