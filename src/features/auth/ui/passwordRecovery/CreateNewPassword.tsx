'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { useGetSignUpMutation } from '@/features/auth/api/authApi'
import {
  SignUpSchemaType,
  signUpSchema,
} from '@/features/auth/ui/signUp/utils/validationRules/zodSchema'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './CreateNewPassword.module.scss'

type SignUpFormProps = {
  onSubmitHandler: (email: string) => void
}

export function CreateNewPassword({ onSubmitHandler }: SignUpFormProps) {
  const [getSignUp] = useGetSignUpMutation()
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
  } = useForm<SignUpSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit: SubmitHandler<SignUpSchemaType> = data => {
    const requestData = {
      baseUrl: 'http://localhost:3000/',
      email: data.email,
      password: data.password,
      userName: data.userName,
    }

    getSignUp(requestData)
      .unwrap()
      .then(response => {
        onSubmitHandler(requestData.email)
        reset()
      })
      .catch(error => {
        error.data.messages.forEach((error: { field: keyof SignUpSchemaType; message: string }) => {
          setError(error.field, { message: error.message })
        })
      })
  }

  return (
    <div className={s.wrap}>
      <Card className={s.formContainer}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Typography align={'center'} className={s.title} variant={'H1'}>
            Create New Password
          </Typography>
          <div className={s.inputContainer}>
            <ControlledInput
              control={control}
              errorText={errors.password?.message} // Используем errorText
              label={'Password'}
              name={'password'}
              variant={'password'}
            />
            <ControlledInput
              control={control}
              errorText={errors.confirmPassword?.message} // Используем errorText
              label={'Password confirmation'}
              name={'confirmPassword'}
              variant={'password'}
            />
            {errors.confirmPassword && (
              <Typography style={{ color: 'red' }} variant={'regular_text_14'}>
                {errors.confirmPassword.message}
              </Typography>
            )}
          </div>
          <Button disabled={!isValid} fullWidth type={'submit'}>
            Create new password
          </Button>
        </form>
      </Card>
    </div>
  )
}
