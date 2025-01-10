'use client'
import { useState } from 'react'

import { SignUpForm } from '@/features/auth/ui/signUp/ui/SingUp'
import { Button } from '@/shared/button/button'
import { Modal } from '@/shared/modal'
import { Typography } from '@/shared/typography/typography'

export default function SignUp() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [email, setEmail] = useState('')

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
      <Modal
        onClose={onClose}
        open={openModal}
        setOpen={setOpenModal}
        title={'Email sent'}
        trigger={<div>Trigger</div>}
      >
        <Typography variant={'regular_text_16'}>
          We have sent a link to confirm your email to {email}
          <div>
            <Button onClick={onClose}>Ok</Button>
          </div>
        </Typography>
      </Modal>
    </div>
  )
}
