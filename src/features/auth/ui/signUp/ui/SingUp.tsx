'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { useGoogleOAuthLogin } from '@/application/hooks/custom/useGoogleOauth'
import GithubSvg from '@/assets/svg/icons/components/GithubSvg'
import GoogleSvg from '@/assets/svg/icons/components/GoogleSvg'
import { useGetSignUpMutation } from '@/features/auth/api/authApi'
import { isErrorResponse } from '@/features/auth/utils/typeGuards/typeGuards'
import { SignUpSchemaType, signUpSchema } from '@/features/auth/utils/validationRules/zodSchema'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { Checkbox } from '@/shared/checkbox/Checkbox'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

import s from './SignUp.module.scss'

type SignUpFormProps = {
  onSubmitHandlerAction: (email: string) => void
}

export function SignUpForm({ onSubmitHandlerAction }: SignUpFormProps) {
  const { loginWithGoogleOAuth } = useGoogleOAuthLogin()
  const [getSignUp] = useGetSignUpMutation()
  const {
    control,
    formState: { isValid },
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

  const handleSignUp: SubmitHandler<SignUpSchemaType> = data => {
    const requestData = {
      baseUrl: 'https://strong-interns.top',
      email: data.email,
      password: data.password,
      userName: data.userName,
    }

    getSignUp(requestData)
      .unwrap()
      .then(() => {
        onSubmitHandlerAction(requestData.email)
        reset()
      })
      .catch(error => {
        if (isErrorResponse(error)) {
          error.data.messages.forEach(error => {
            setError(error.field, { message: error.message })
          })
        } else {
          throw new Error('Unexpected error')
        }
      })
  }

  return (
    <div className={s.wrap}>
      <Card className={s.formContainer}>
        <form className={s.form} onSubmit={handleSubmit(handleSignUp)}>
          <Typography align={'center'} className={s.title} variant={'H1'}>
            Sign Up
          </Typography>
          <div className={s.iconContainer}>
            <GoogleSvg onClick={loginWithGoogleOAuth} style={{ cursor: 'pointer' }} />
            <GithubSvg />
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
                    <Link className={s.link} href={'/auth/signup/termsOfService'}>
                      {' '}
                      Terms of Service{' '}
                    </Link>
                    and
                    <Link className={s.link} href={'/auth/signup/privacyPolicy'}>
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
            <Link className={s.signinButton} href={'/auth/signin'}>
              Sign In
            </Link>
          </div>
        </form>
      </Card>
    </div>
  )
}
