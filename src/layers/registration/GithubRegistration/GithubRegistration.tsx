import React, { useState } from 'react'

import { CheckEmail } from '@/features/auth/ui/checkEmail/CheckEmail'
import { GithubCreatePasswordForm } from '@/features/auth/ui/githubCreatePasswordForm/ui/GithubCreatePasswordForm'

import s from '@/layers/registration/SignUpPage/SignUpPage.module.scss'

export const GithubRegistrationPage = () => {
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

  return (
    <div className={s.container}>
      <GithubCreatePasswordForm onSubmitHandlerAction={onOpenModalHandler} />
      <CheckEmail
        email={email as string}
        onClose={onCloseModalHandler}
        open={openModal}
        setOpen={setOpenModal}
      />
    </div>
  )
}
