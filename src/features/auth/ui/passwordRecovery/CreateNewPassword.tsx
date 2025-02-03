'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { useGetConfirmPasswordRecoveryMutation } from '@/features/auth/api/authApi'
import {
  RecoveryPasswordSchemaType,
  recoveryPasswordSchema,
} from '@/features/auth/utils/validationRules/zodSchema'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './CreateNewPassword.module.scss'

type SignUpFormProps = {
  onSubmitAction: () => void
  recoveryCode: string
}

export function CreateNewPasswordForm({ onSubmitAction, recoveryCode }: SignUpFormProps) {
  const [getConfirmPasswordRecovery] = useGetConfirmPasswordRecoveryMutation()
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
  } = useForm<RecoveryPasswordSchemaType>({
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(recoveryPasswordSchema),
  })

  const onSubmit: SubmitHandler<RecoveryPasswordSchemaType> = data => {
    const requestData = {
      newPassword: data.password,
      recoveryCode,
    }

    getConfirmPasswordRecovery(requestData)
      .unwrap()
      .then(() => {
        onSubmitAction()
        reset()
      })
      .catch(error => {
        error.data.messages.forEach(
          (error: { field: keyof RecoveryPasswordSchemaType; message: string }) => {
            setError(error.field, { message: error.message })
          }
        )
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
              errorText={errors.password?.message}
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
          </div>
          <Button disabled={!isValid} fullWidth type={'submit'}>
            Create new password
          </Button>
        </form>
      </Card>
    </div>
  )
}
