'use client'

import { useForm } from 'react-hook-form'

import { useGetSignInMutation } from '@/features/auth/api/authApi'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { Form } from '@/shared/form/form'
import { Input } from '@/shared/input'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'

export function SignInForm() {
  const [getSignIn, { isLoading }] = useGetSignInMutation()
  const { control, handleSubmit } = useForm<>()

  function isLoginData(
    formData: Record<string, boolean | string>
  ): formData is { email: string; password: string } {
    return (
      'email' in formData &&
      'password' in formData &&
      typeof formData.password === 'string' &&
      typeof formData.email === 'string'
    )
  }

  const handleLogIn = async (data: Record<string, boolean | string>) => {
    if (isLoginData(data)) {
      try {
        await getSignIn(data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLogIn)}>
      <Card>
        <Typography align={'center'} variant={'H1'}>
          Sing In
        </Typography>
        <ControlledInput control={control} label={'Email'} name={''} variant={'text'} />
        <ControlledInput control={control} label={'Password'} name={''} variant={'password'} />
        <Button type={'submit'}>Sing In</Button>
        <Typography variant={'regular_text_16'}>Don’t have an account?</Typography>
        <Button disabled={isLoading} variant={'link'}>
          <Typography variant={'H3'}>Sign Up</Typography>
        </Button>
      </Card>
    </form>
  )
}
