'use client'

import { useForm } from 'react-hook-form'

import { GithubSvg, GoogleSvg } from '@/assets/svg/icons/components'
import { useGoogleOAuthLogin } from '@/features/auth/hooks/useGoogleOauth'
import { useSignIn } from '@/features/auth/hooks/useSignIn'
import { SignInSchemaType, signInSchema } from '@/features/auth/utils/validationRules/zodSchema'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

import s from './SignIn.module.scss'

export function SignInForm() {
  const {
    control,
    formState: { errors, isLoading },
    handleSubmit,
    setError,
  } = useForm<SignInSchemaType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(signInSchema),
  })
  const { getSignIn, loginGithubHandler } = useSignIn({
    errorHandler: setError,
  })
  const { loginWithGoogleOAuth } = useGoogleOAuthLogin()

  return (
    <div className={s.wrap}>
      <Card className={s.formContainer}>
        <form className={s.form} onSubmit={handleSubmit(getSignIn)}>
          <Typography align={'center'} className={s.title} variant={'H1'}>
            Sign In
          </Typography>
          <div className={s.iconContainer}>
            <GoogleSvg onClick={loginWithGoogleOAuth} style={{ cursor: 'pointer' }} />
            <GithubSvg onClick={loginGithubHandler} style={{ cursor: 'pointer' }} />
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
          <div className={s.forgotPasswordLink}>
            <Link href={'/forgot-password'}>Forgot Password</Link>
          </div>

          <Button
            className={s.signInButton}
            disabled={isLoading || Object.keys(errors).length > 0}
            fullWidth
            type={'submit'}
          >
            Sing In
          </Button>
          <div className={s.signupContainer}>
            <Typography variant={'regular_text_16'}>Don’t have an account?</Typography>
            <Link className={s.signupButton} href={'/signup'}>
              Sign Up
            </Link>
          </div>
        </form>
      </Card>
    </div>
  )
}
