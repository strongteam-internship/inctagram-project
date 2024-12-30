'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import GithubSvg from '@/assets/svg/icons/components/GithubSvg'
import GoogleSvg from '@/assets/svg/icons/components/GoogleSvg'
import { useGetSignUpMutation } from '@/features/auth/api/authApi'
import { validationRulesForSignUpForm } from '@/features/auth/ui/signUp/utils/validationRules/validationRules'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { Checkbox } from '@/shared/checkbox/Checkbox'
import { Form } from '@/shared/form/form'
import { Input } from '@/shared/input'
import { Typography } from '@/shared/typography/typography'

type SignUpFormProps = {
  onSubmitHandler: (email: string) => void
}

export type FormData = {
  confirmPassword: string
  confirmTermsAndPolicy: boolean
  email: string
  password: string
  userName: string
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
  field: keyof FormData
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
    formState: { errors, isValid },
    handleSubmit,
    register,
    reset,
    setError,
    watch,
  } = useForm<FormData>({
    mode: 'onBlur',
  })

  const isTermsAndPolicyChecked = watch('confirmTermsAndPolicy')

  const onSubmit: SubmitHandler<FormData> = data => {
    const requestData = {
      baseUrl: 'http://localhost:3000/',
      email: data.email,
      password: data.password,
      userName: data.userName,
    }

    getSignUp(requestData)
      .unwrap()
      .then(response => {
        console.log(response)
        onSubmitHandler(requestData.email)
        reset()
      })
      .catch(error => {
        error.data.messages.forEach((error: ErrorMessage) => {
          setError(error.field, { message: error.message })
        })
      })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <Typography align={'center'} variant={'H1'}>
          Sing Up
        </Typography>
        <div>
          <GoogleSvg />
          <GithubSvg />
        </div>
        <Input
          label={'Username'}
          {...register('userName', validationRulesForSignUpForm.userName)}
          errorText={errors.userName?.message}
          variant={'text'}
        />
        <Input
          label={'Email'}
          {...register('email', validationRulesForSignUpForm.email)}
          errorText={errors.email?.message}
          variant={'text'}
        />
        <Input
          label={'Password'}
          {...register('password', validationRulesForSignUpForm.password)}
          errorText={errors.password?.message}
          variant={'password'}
        />
        <Input
          label={'Password confirmation'}
          {...register('confirmPassword', validationRulesForSignUpForm.confirmPassword)}
          errorText={errors.confirmPassword?.message}
          variant={'password'}
        />
        <div>
          <Checkbox>
            <Checkbox.Input {...register('confirmTermsAndPolicy')} />
            <Checkbox.Label>
              <Typography>I agree to the Terms of Service and Privacy Policy</Typography>
            </Checkbox.Label>
          </Checkbox>
        </div>
        <Button disabled={!isTermsAndPolicyChecked || !isValid} type={'submit'}>
          Sing Up
        </Button>
        <Typography variant={'regular_text_16'}>Do you have an account?</Typography>
        <Button variant={'link'}>
          <Typography variant={'H3'}>Sign In</Typography>
        </Button>
      </Card>
    </Form>
  )
}
