'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { isErrorResponse } from '@/application/api/types/typeGuards/typeGuards'
import { useGithubAuth } from '@/application/hooks/custom/useGithubAuth'
import { useGoogleOAuthLogin } from '@/application/hooks/custom/useGoogleOauth'
import GithubSvg from '@/assets/svg/icons/components/GithubSvg'
import GoogleSvg from '@/assets/svg/icons/components/GoogleSvg'
import { useGetSignUpMutation } from '@/features/auth/api/authApi'
import { SignUpSchemaType, signUpSchema } from '@/features/auth/utils/validationRules/zodSchema'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { Checkbox } from '@/shared/checkbox/Checkbox'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { z } from 'zod'

import s from './SignUp.module.scss'

type SignUpFormProps = {
  onSubmitHandlerAction: (email: string) => void
}

export function SignUpForm({ onSubmitHandlerAction }: SignUpFormProps) {
  const { loginWithGoogleOAuth } = useGoogleOAuthLogin()
  const { loginGithubHandler } = useGithubAuth()
  const [getSignUp, { error, isError, isSuccess }] = useGetSignUpMutation()

  const {
    control,
    formState: { isValid },
    getValues,
    handleSubmit,
    register,
    reset,
    setError,
    watch,
  } = useForm<SignUpSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(signUpSchema),
  })
  const isTermsAndPolicyChecked = watch('agreeToPolicies')

  const handleSuccess = () => {
    onSubmitHandlerAction(getValues().email)
    reset()
  }

  if (isError) {
    if (
      isErrorResponse<Array<{ field: keyof z.infer<typeof signUpSchema>; message: string }>>(error)
    ) {
      error.data.messages.forEach(({ field, message }) => {
        setError(field, { message: message })
      })
    }
  }

  isSuccess && handleSuccess()

  return (
    <div className={s.wrap}>
      <Card className={s.formContainer}>
        <form className={s.form} onSubmit={handleSubmit(getSignUp)}>
          <Typography align={'center'} className={s.title} variant={'H1'}>
            Sign Up
          </Typography>
          <div className={s.iconContainer}>
            <GoogleSvg onClick={loginWithGoogleOAuth} style={{ cursor: 'pointer' }} />
            <GithubSvg onClick={loginGithubHandler} style={{ cursor: 'pointer' }} />
          </div>
          <div className={s.inputContainer}>
            <ControlledInput
              control={control}
              label={'Username'}
              name={'userName'}
              variant={'text'}
            />
            <ControlledInput control={control} label={'Email'} name={'email'} variant={'text'} />
            <ControlledInput
              control={control}
              label={'Password'}
              name={'password'}
              variant={'password'}
            />
            <ControlledInput
              control={control}
              label={'Password confirmation'}
              name={'confirmPassword'}
              variant={'password'}
            />
            <div>
              <Checkbox>
                <Checkbox.Input {...register('agreeToPolicies')} />
                <Checkbox.Label>
                  <Typography className={s.terms} variant={'small_text_12'}>
                    I agree to the
                    <Link className={s.link} href={'/signup/termsOfService'}>
                      {' '}
                      Terms of Service{' '}
                    </Link>
                    and
                    <Link className={s.link} href={'/signup/privacyPolicy'}>
                      {' '}
                      Privacy Policy
                    </Link>
                  </Typography>
                </Checkbox.Label>
              </Checkbox>
            </div>
          </div>

          <Button disabled={!isTermsAndPolicyChecked || !isValid} fullWidth type={'submit'}>
            Sign Up
          </Button>
          <div className={s.signInContainer}>
            <Typography variant={'regular_text_16'}>Do you have an account?</Typography>
            <Link className={s.signinButton} href={'/signin'}>
              Sign In
            </Link>
          </div>
        </form>
      </Card>
    </div>
  )
}
