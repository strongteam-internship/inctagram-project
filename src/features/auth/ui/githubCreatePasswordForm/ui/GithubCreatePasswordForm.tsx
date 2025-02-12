import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useGetSignUpMutation } from '@/features/auth/api/authApi'
import { isErrorResponse } from '@/features/auth/utils/typeGuards/typeGuards'
import {
  PasswordOnlySchema,
  PasswordOnlySchemaType,
} from '@/features/auth/utils/validationRules/zodSchema'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { ControlledInput } from '@/shared/input/controlled-input'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './GithubCreatePasswordForm.module.scss'

type GithubCreatePasswordFormProps = {
  onSubmitHandlerAction: (email: string) => void
}

export const GithubCreatePasswordForm = ({
  onSubmitHandlerAction,
}: GithubCreatePasswordFormProps) => {
  const { control, handleSubmit, reset, setError } = useForm<PasswordOnlySchemaType>({
    defaultValues: {
      password: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(PasswordOnlySchema),
  })
  const [getSignUp] = useGetSignUpMutation()

  const params = new URLSearchParams(window.location.search)
  const userEmail = '1' + params.get('email')
  const token = params.get('accessToken')

  localStorage.setItem('token', token as string)
  const userName = userEmail ? userEmail.split('@')[0].replace(/[^a-zA-Z0-9_-]/g, '-') : ''

  const onSubmit: SubmitHandler<PasswordOnlySchemaType> = data => {
    const requestData = {
      baseUrl: 'http://localhost:3000/',
      email: userEmail as string,
      password: data.password,
      userName: userName as string,
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
    <div>
      <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <Card className={s.cardContainer}>
          <ControlledInput
            control={control}
            label={'Create password'}
            name={'password'}
            variant={'password'}
          />
          <Button type={'submit'} variant={'primary'}>
            Register Account
          </Button>
        </Card>
      </form>
    </div>
  )
}
