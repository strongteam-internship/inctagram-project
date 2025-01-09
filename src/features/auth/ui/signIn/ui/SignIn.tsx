'use client'

import { useForm } from 'react-hook-form'

import { GithubSvg, GoogleSvg } from '@/assets/svg/icons/components'
import { useGetSignInMutation } from '@/features/auth/api/authApi'
import { SignInSchemaType, signInSchema } from '@/features/auth/ui/signIn/utils/schema/schema'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

import s from './SignIn.module.scss'

export function SignInForm() {
  const [getSignIn, { isLoading }] = useGetSignInMutation()
  const { control, handleSubmit, setError } = useForm<SignInSchemaType>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
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
      <form className={s.form} onSubmit={handleSubmit(handleLogIn)}>
        <Typography align={'center'} className={s.title} variant={'H1'}>
          Sing In
        </Typography>
        <div className={s.iconContainer}>
          <GoogleSvg />
          <GithubSvg />
        </div>
        <div className={s.inputContainer}>
          <ControlledInput control={control} label={'Email'} name={'email'} variant={'text'} />
          <ControlledInput
            control={control}
            label={'Password'}
            name={'password'}
            variant={'password'}
          />
        </div>

        <Button className={s.signInButton} disabled={isLoading} fullWidth type={'submit'}>
          Sing In
        </Button>
        <Typography variant={'regular_text_16'}>Don’t have an account?</Typography>
        <Link className={s.signupButton} href={'/signup'}>
          Sign Up
        </Link>
      </form>
    </Card>
  )
}
