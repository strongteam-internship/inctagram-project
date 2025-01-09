'use client'

import { useForm } from 'react-hook-form'

import { useGetSignInMutation } from '@/features/auth/api/authApi'
import { SignInSchemaType, signInSchema } from '@/features/auth/ui/signIn/utils/schema/schema'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

export function SignInForm() {
  const [getSignIn, { isLoading }] = useGetSignInMutation()
  const { control, handleSubmit, setError } = useForm<SignInSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(signInSchema),
  })

  const handleLogIn = (data: { email: string; password: string }) => {
    getSignIn(data)
      .unwrap()
      .then(res => console.log(res))
      .catch(err => setError('password', { message: err.data.messages }))
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(handleLogIn)}>
        <Typography align={'center'} variant={'H1'}>
          Sing In
        </Typography>
        <ControlledInput control={control} label={'Email'} name={'email'} variant={'text'} />
        <ControlledInput
          control={control}
          label={'Password'}
          name={'password'}
          variant={'password'}
        />
        <Button disabled={isLoading} type={'submit'}>
          Sing In
        </Button>
      </form>
      <Typography variant={'regular_text_16'}>Don’t have an account?</Typography>
      <Link href={'/signup'}>
        <Typography variant={'H3'}>Sign Up</Typography>
      </Link>
    </Card>
  )
}
