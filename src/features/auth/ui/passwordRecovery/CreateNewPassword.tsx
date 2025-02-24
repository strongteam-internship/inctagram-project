'use client'

import { useForm } from 'react-hook-form'

import { useGetNewPassword } from '@/features/auth/hooks/useGetNewPassword'
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
  const onSuccessHandler = () => {
    onSubmitAction()
    reset()
  }

  const { getNewPassword } = useGetNewPassword({
    errorHandler: setError,
    successHandler: onSuccessHandler,
  })

  return (
    <div className={s.wrap}>
      <Card className={s.formContainer}>
        <form
          className={s.form}
          onSubmit={handleSubmit(data =>
            getNewPassword({ newPassword: data.newPassword, recoveryCode })
          )}
        >
          <Typography align={'center'} className={s.title} variant={'H1'}>
            Create New Password
          </Typography>
          <div className={s.inputContainer}>
            <ControlledInput
              control={control}
              errorText={errors.newPassword?.message}
              label={'Password'}
              name={'newPassword'}
              variant={'password'}
            />
            <ControlledInput
              control={control}
              errorText={errors.confirmPassword?.message}
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
