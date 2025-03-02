import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import { usePasswordRecovery } from '@/features/auth/hooks/usePasswordRecovery'
import { useRecaptcha } from '@/features/auth/hooks/useRecaptcha'
import {
  ForgotPasswordSchemaType,
  forgotPasswordSchema,
} from '@/features/auth/utils/validationRules/zodSchema'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

import s from './ForgotPasswordForm.module.scss'

type ForgotPasswordFormProps = {
  onSubmitHandler: (email: string) => void
}

export const ForgotPasswordForm = ({ onSubmitHandler }: ForgotPasswordFormProps) => {
  const { captchaToken, handleRecaptcha, recaptchaRef, siteKey } = useRecaptcha()
  const {
    control,
    formState: { isLoading },
    handleSubmit,
    reset,
    setError,
  } = useForm<ForgotPasswordSchemaType>({
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(forgotPasswordSchema),
  })

  const { getPasswordRecovery } = usePasswordRecovery({
    errorHandler: setError,
    successHandler: email => {
      onSubmitHandler(email)
      reset()
    },
  })

  return (
    <div>
      <form
        className={s.formContainer}
        onSubmit={handleSubmit(({ email }) =>
          getPasswordRecovery({ email, recaptcha: captchaToken })
        )}
      >
        <Card className={s.cardContainer}>
          <Typography align={'center'} className={s.title} variant={'H1'}>
            Forgot Password
          </Typography>
          <ControlledInput
            control={control}
            label={'Email'}
            name={'email'}
            placeholder={'Epam@epam.com'}
          />
          <Typography className={s.text} variant={'regular_text_14'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <div className={s.ButtonsContainer}>
            <Button
              disabled={isLoading || !captchaToken}
              fullWidth
              type={'submit'}
              variant={'primary'}
            >
              Send Link
            </Button>
            <div className={s.linkContainer}>
              <Link className={s.linkText} href={'/signin'}>
                Back to Sign In
              </Link>
            </div>
            <div className={s.recaptchaContainer}>
              <ReCAPTCHA
                onChange={handleRecaptcha}
                ref={recaptchaRef}
                sitekey={siteKey}
                size={'normal'}
                theme={'dark'}
              />
            </div>
          </div>
        </Card>
      </form>
    </div>
  )
}
