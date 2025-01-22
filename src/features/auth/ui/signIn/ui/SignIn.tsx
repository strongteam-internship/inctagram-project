'use client'

import { useForm } from 'react-hook-form'

import { useAppDispatch } from '@/application/hooks/hooks'
import { setIsLoggedIn } from '@/application/model/app/appSlice'
import { GithubSvg, GoogleSvg } from '@/assets/svg/icons/components'
import { useGetMeQuery, useGetSignInMutation } from '@/features/auth/api/authApi'
import { SignInSchemaType, signInSchema } from '@/features/auth/ui/signIn/utils/schema/schema'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import s from './SignIn.module.scss'

export function SignInForm() {
  const { data } = useGetMeQuery()
  const [getSignIn, { isLoading }] = useGetSignInMutation()
  const dispatch = useAppDispatch()
  const router = useRouter()
  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    setError,
  } = useForm<SignInSchemaType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',

    resolver: zodResolver(signInSchema),
  })

  if (data) {
    router.push('/profile')
  }

  const handleLogIn = (data: { email: string; password: string }) => {
    getSignIn(data)
      .unwrap()
      .then(() => {
        dispatch(setIsLoggedIn(true))
        router.push('/profile')
      })
      .catch(error => {
        if ('data' in error) {
          const fieldsKeys = Object.keys(getValues())

          fieldsKeys.forEach(field => {
            setError(field as keyof SignInSchemaType, { message: error.data.messages })
          })
        } else {
          throw new Error('Unexpected error')
        }
      })
  }

  return (
    <div className={s.wrap}>
      <Card className={s.formContainer}>
        <form className={s.form} onSubmit={handleSubmit(handleLogIn)}>
          <Typography align={'center'} className={s.title} variant={'H1'}>
            Sign In
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
            <Link className={s.signupButton} href={'/auth/signup'}>
              Sign Up
            </Link>
          </div>
        </form>
      </Card>
    </div>
  )
}
