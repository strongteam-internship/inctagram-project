import React from 'react'

import { Button } from '@/shared/button/button'
import { Modal, ModalProps } from '@/shared/modal/Modal'
import { Typography } from '@/shared/typography/typography'

import s from './CheckEmail.module.scss'

type CheckEmailProps = {
  email: string
} & ModalProps

export const CheckEmail = ({
  email = 'example@mail.com',
  onClose,
  open,
  setOpen,
  title = 'Email sent',
  trigger,
  ...restProps
}: CheckEmailProps) => {
  const onButtonClickHandler = () => {
    setOpen(false)
  }

  return (
    <Modal
      onClose={onClose}
      open={open}
      setOpen={setOpen}
      title={title}
      trigger={trigger}
      {...restProps}
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
