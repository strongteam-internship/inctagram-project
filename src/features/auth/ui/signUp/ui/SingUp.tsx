'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import GithubSvg from '@/assets/svg/icons/components/GithubSvg'
import GoogleSvg from '@/assets/svg/icons/components/GoogleSvg'
import { useGetSignUpMutation } from '@/features/auth/api/authApi'
import {
  SignUpSchemaType,
  signUpSchema,
} from '@/features/auth/ui/signUp/utils/validationRules/zodSchema'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { Checkbox } from '@/shared/checkbox/Checkbox'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

import s from './SignUp.module.scss'

type SignUpFormProps = {
  onSubmitHandler: (email: string) => void
}

type ErrorResponse = {
  data: {
    error: string
    messages: Array<ErrorMessage>
    statusCode: number
  }
  status: number
}

type ErrorMessage = {
  field: keyof SignUpSchemaType
  message: string
}

function isErrorMessage(errorMessage: unknown): errorMessage is ErrorMessage {
  return (
    typeof errorMessage === 'object' &&
    errorMessage !== null &&
    'field' in errorMessage &&
    'message' in errorMessage &&
    typeof errorMessage.field === 'string' &&
    typeof errorMessage.message === 'string'
  )
}

function isError(errorRes: unknown): errorRes is ErrorResponse {
  return (
    typeof errorRes === 'object' &&
    errorRes !== null &&
    'data' in errorRes &&
    typeof errorRes.data === 'object' &&
    errorRes.data !== null &&
    'error' in errorRes.data &&
    typeof errorRes.data.error === 'string' &&
    'messages' in errorRes.data &&
    Array.isArray(errorRes.data.messages) &&
    errorRes.data.messages.every(message => isErrorMessage(message)) &&
    'status' in errorRes &&
    typeof errorRes.status === 'number'
  )
}

export function SignUpForm({ onSubmitHandler }: SignUpFormProps) {
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

  const onSubmit: SubmitHandler<SignUpSchemaType> = data => {
    const requestData = {
      baseUrl: 'https://strong-interns.top/signup/confirmEmail',
      email: data.email,
      password: data.password,
      userName: data.userName,
    }

    //Todo: поправить код на 95 строка после типизации ошибок
    getSignUp(requestData)
      .unwrap()
      .then(response => {
        if (response.statusCode === 204) {
          onSubmitHandler(requestData.email)
          reset()
        }
      })
      .catch(error => {
        error.data.messages.forEach((error: ErrorMessage) => {
          setError(error.field, { message: error.message })
        })
      })
  }

  return (
    <div className={s.wrap}>
      <Card className={s.formContainer}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Typography align={'center'} className={s.title} variant={'H1'}>
            Sign Up
          </Typography>
          <div className={s.iconContainer}>
            <GoogleSvg />
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
