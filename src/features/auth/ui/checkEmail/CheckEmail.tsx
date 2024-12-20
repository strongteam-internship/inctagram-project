import React, { useState } from 'react'

import { Button } from '@/shared/button/button'
import { Modal } from '@/shared/modal/Modal'
import { Typography } from '@/shared/typography/typography'

import s from './CheckEmail.module.scss'

type CheckEmailProps = {
  email: string
}

export const CheckEmail = ({ email = 'example@mail.com' }: CheckEmailProps) => {
  const [open, setOpen] = useState(false)

  const onButtonClickHandler = () => {
    setOpen(false)
  }

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={'Email sent'}
      trigger={
        <Button className={s.button} variant={'primary'}>
          Sign Up
        </Button>
      }
    >
      <div className={s.text}>
        <Typography variant={'regular_text_16'}>
          {`We have sent a link to confirm your email to ${email}`}
        </Typography>
      </div>
      <div className={s.buttonContainer}>
        <Button
          className={s.button}
          onClick={onButtonClickHandler}
          type={'button'}
          variant={'primary'}
        >
          OK
        </Button>
      </div>
    </Modal>
  )
}
