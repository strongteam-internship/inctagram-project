'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { useGetSignUpMutation } from '@/features/auth/api/authApi'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { Checkbox } from '@/shared/checkbox/Checkbox'
import { Form } from '@/shared/form/form'
import { Input } from '@/shared/input'
import { Typography } from '@/shared/typography/typography'

type ErrorResponse = {
  data: {
    error: string
    messages: Array<{ field: string; message: string }>
    statusCode: number
  }
  status: number
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
    'status' in errorRes.data &&
    typeof errorRes.data.status === 'number'
  )
}

export function SignUpForm() {
  type FormData = {
    confirmPassword: string
    confirmTermsAndPolicy: boolean
    email: string
    password: string
    userName: string
  }

  const [getSignUp] = useGetSignUpMutation()

  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm<FormData>({
    mode: 'onBlur',
  })

  const isTermsAndPolicyChecked = watch('confirmTermsAndPolicy')

  const validationRulesForSignUpForm = {
    confirmPassword: {
      required: 'Password confirmation is required',
      validate: (value: string, { password }: FormData) =>
        value === password || 'Passwords do not match',
    },

    email: {
      pattern: {
        message: 'Invalid email format',
        value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      },
      required: 'Email is required',
    },
    password: {
      maxLength: { message: 'Max length is 20', value: 20 },
      minLength: { message: 'Min length is 6', value: 6 },
      pattern: {
        message: 'Password must include uppercase, lowercase, number, and special character',
        value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*]).{6,20}$/,
      },
      required: 'Password is required',
    },
    userName: {
      maxLength: { message: 'Max length is 30', value: 30 },
      minLength: { message: 'Min length is 6', value: 6 },
      pattern: {
        message: 'Invalid username (use letters, numbers, _, -)',
        value: /^[\w_-]{6,30}$/,
      },
      required: 'Username is required',
    },
  }

  const onSubmit: SubmitHandler<FormData> = async data => {
    const requestData = {
      baseUrl: 'http://localhost:3000/',
      email: data.email,
      password: data.password,
      userName: data.userName,
    }

    try {
      const response = await getSignUp(requestData).unwrap()

      console.log(response)
      if (response.statusCode === 204) {
        reset()
      }
    } catch (error) {
      if (isError(error)) {
        console.log(error.data.messages[0].field)
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <Typography align={'center'} variant={'H1'}>
          Sing Up
        </Typography>
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
