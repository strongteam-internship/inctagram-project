'use client'

import { useState } from 'react'

import { CheckEmail } from '@/features/auth/ui/checkEmail/CheckEmail'
import { SignUpForm } from '@/features/auth/ui/signUp/ui/SingUp'

import s from './SignUpPage.module.scss'

export function SignUpPage() {
  const [email, setEmail] = useState<string>('')
  const [openModal, setOpenModal] = useState<boolean>(false)

  const onOpenModalHandler = (email: string) => {
    setEmail(email)
    setOpenModal(true)
  }
  const onCloseModalHandler = () => {
    setEmail('')
    setOpenModal(false)
  }

  console.log('email is: ' + email)

  return (
    <div className={s.container}>
      <SignUpForm onSubmitHandler={onOpenModalHandler} />
      <CheckEmail
        email={email}
        onClose={onCloseModalHandler}
        open={openModal}
        setOpen={setOpenModal}
      />
    </div>
  )
}
