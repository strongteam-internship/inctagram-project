'use client'
import { useState } from 'react'

import { CheckEmail } from '@/features/auth/ui/checkEmail/CheckEmail'
import { SignUpForm } from '@/features/auth/ui/signUp/ui/singUpForm'

export default function SignUp() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  const submitHandler = (email: string) => {
    setOpenModal(true)
    setEmail(email)
  }
  const onClose = () => {
    setOpenModal(false)
    setEmail('')
  }

  return (
    <div>
      <SignUpForm onSubmitHandler={email => submitHandler(email)} />
      <CheckEmail email={email} onClose={onClose} open={openModal} setOpen={setOpenModal} />
    </div>
  )
}
