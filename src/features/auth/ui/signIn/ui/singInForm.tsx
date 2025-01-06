'use client'

import GithubSvg from '@/assets/svg/icons/components/GithubSvg'
import GoogleSvg from '@/assets/svg/icons/components/GoogleSvg'
import { signInSchema } from '@/features/auth/ui/signIn/utils/validation/zodSchemaSignIn'
import { Button } from '@/shared/button/button'
import { Form } from '@/shared/form/Form'
import { Typography } from '@/shared/typography/typography'
import Link from 'next/link'
import { ZodAny, z } from 'zod'

import s from './singInForm.module.scss'

export function SignInForm() {
  //Это на потом---------------
  // function isLoginData(
  //   formData: Record<string, boolean | string>
  // ): formData is { email: string; password: string } {
  //   return (
  //     'email' in formData &&
  //     'password' in formData &&
  //     typeof formData.password === 'string' &&
  //     typeof formData.email === 'string'
  //   )
  // }
  //------------------

  const handleLogIn = (data: z.infer<typeof signInSchema>) => {
    console.log(data)
  }

  return (
    <Form className={s.form} onSubmit={handleLogIn} validationRules={signInSchema}>
      <Form.Title align={'center'} className={s.title} variant={'H1'}>
        Sign In
      </Form.Title>

      <Form.Icons className={s.iconContainer}>
        <GoogleSvg />
        <GithubSvg />
      </Form.Icons>
      <Form.Body className={s.inputContainer}>
        <Form.TextField label={'Email'} name={'email'} variant={'text'} />
        <Form.TextField label={'Password'} name={'password'} variant={'password'} />
      </Form.Body>
      <Typography align={'right'} variant={'medium_text_14'}>
        Forgot Password
      </Typography>
      <Button className={s.signInButton} type={'submit'}>
        Sing In
      </Button>
      <Typography align={'center'} variant={'regular_text_16'}>
        Don’t have an account?
      </Typography>
      <Link className={s.signupButton} href={'/signup'}>
        Sign Up
      </Link>
    </Form>
  )
}
