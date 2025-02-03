'use client'

import React, { useState } from 'react'

import { CheckEmail } from '@/features/auth/ui/checkEmail/CheckEmail'
import { ForgotPasswordForm } from '@/features/auth/ui/forgotPassword/ui/ForgotPasswordForm'

export default function ForgotPassword() {
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
      <ForgotPasswordForm onSubmitHandler={email => submitHandler(email)} />
      <CheckEmail email={email} onClose={onClose} open={openModal} setOpen={setOpenModal} />
    </div>
  )
}
