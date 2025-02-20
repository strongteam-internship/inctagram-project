'use client'

import { useForm } from 'react-hook-form'

import { isErrorResponse } from '@/application/api/types/typeGuards/typeGuards'
import { useGithubAuth } from '@/application/hooks/custom/useGithubAuth'
import { GithubSvg, GoogleSvg } from '@/assets/svg/icons/components'
import { useGetSignInMutation } from '@/features/auth/api/authApi'
import { SignInSchemaType, signInSchema } from '@/features/auth/utils/validationRules/zodSchema'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import s from './SignIn.module.scss'

export function SignInForm({ loginWithGoogleAction }: { loginWithGoogleAction: () => void }) {
  const [getSignIn, { error, isLoading, isSuccess }] = useGetSignInMutation()
  const router = useRouter()
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<SignInSchemaType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',

    resolver: zodResolver(signInSchema),
  })

  const { loginGithubHandler } = useGithubAuth()

  if (isErrorResponse<string>(error)) {
    setError('password', { message: error.data.messages as string })
  }
  isSuccess && router.push('/private/profile')

  return (
    <div className={s.wrap}>
      <Card className={s.formContainer}>
        <form className={s.form} onSubmit={handleSubmit(getSignIn)}>
          <Typography align={'center'} className={s.title} variant={'H1'}>
            Sign In
          </Typography>
          <div className={s.iconContainer}>
            <GoogleSvg onClick={loginWithGoogleAction} style={{ cursor: 'pointer' }} />
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
