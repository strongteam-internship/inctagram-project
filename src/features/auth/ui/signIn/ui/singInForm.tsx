'use client'

import { useGetSignInMutation } from '@/features/auth/api/authApi'
import { signInSchema } from '@/features/auth/ui/signIn/utils/validation/zodSchemaSignIn'
import { Button } from '@/shared/button/button'
import { Card } from '@/shared/card'
import { FormSecond, FormTextField } from '@/shared/form/formSecondVariant'
import { z } from 'zod'

export function SignInForm() {
  const [getSignIn] = useGetSignInMutation()

  function isLoginData(
    formData: Record<string, boolean | string>
  ): formData is { email: string; password: string } {
    return (
      'email' in formData &&
      'password' in formData &&
      typeof formData.password === 'string' &&
      typeof formData.email === 'string'
    )
  }

  const handleLogIn = (data: z.infer<typeof signInSchema>) => {
    getSignIn(data)
      .unwrap()
      .then(response => {
        console.log('Success: ', response)
      })
      .catch(error => {
        console.log('Error:', error)
      })
  }

  return (
    <FormSecond onSubmit={handleLogIn} validationRules={signInSchema}>
      <Card>
        <FormTextField label={'Email'} name={'email'} variant={'text'} />
        <FormTextField label={'Password'} name={'password'} variant={'password'} />
        <Button type={'submit'}>Sing Up</Button>
      </Card>
    </FormSecond>
  )
}
