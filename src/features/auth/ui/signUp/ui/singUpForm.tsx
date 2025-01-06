'use client'

import GithubSvg from '@/assets/svg/icons/components/GithubSvg'
import GoogleSvg from '@/assets/svg/icons/components/GoogleSvg'
import { signUpSchema } from '@/features/auth/ui/signUp/utils/validationRules/zodSchema'
import { Form } from '@/shared/Form/Form'
import { Typography } from '@/shared/typography/typography'
import Link from 'next/link'
import { z } from 'zod'

import s from './singUpForm.module.scss'

// type SignUpFormProps = {
//   onSubmitHandler: (data: {
//     agreeToPolicies: boolean
//     confirmPassword: string
//     email: string
//     password: string
//     userName: string
//   }) => void
// }

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

export function SignUpForm() {
  const onSubmit = (data: z.infer<typeof signUpSchema>) => {}

  //https://strong-interns.top//auth/registration-confirmation?code=eef65719-b03d-4df0-9cde-8d6fa921c12a&email=pavelretunskih@gmail.com
  //http://localhost:3000/auth/registration-confirmation?code=fbd99987-f3de-4fec-a309-f5b9f560ed2d&email=pavelretunskih@gmail.com
  return (
    <Form className={s.form} onSubmit={data => onSubmit} validationRules={signUpSchema}>
      <Form.Title align={'center'} variant={'H1'}>
        Sing Up
      </Form.Title>
      <Form.Icons className={s.iconContainer}>
        <GoogleSvg />
        <GithubSvg />
      </Form.Icons>
      <Form.Body className={s.inputContainer}>
        <Form.TextField label={'Username'} name={'userName'} variant={'text'} />
        <Form.TextField label={'Email'} name={'email'} variant={'text'} />
        <Form.TextField label={'Password'} name={'password'} variant={'password'} />
        <Form.TextField label={'Confirm password'} name={'confirmPassword'} variant={'password'} />
        <div>
          <Form.CheckBox name={'agreeToPolicies'}>
            <Typography>I agree to the Terms of Service and Privacy Policy</Typography>
          </Form.CheckBox>
        </div>
        <Form.Button>Sing Up</Form.Button>
      </Form.Body>
      <Typography variant={'regular_text_16'}>Do you have an account?</Typography>
      <Link href={'/signin'}>
        <Typography variant={'H3'}>Sign In</Typography>
      </Link>
    </Form>
  )
}
