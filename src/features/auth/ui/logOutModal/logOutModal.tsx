'use client'

import { FC } from 'react'

import { useLogOut } from '@/features/auth/hooks/useLogOut'
import { Button } from '@/shared/button/button'
import { Modal } from '@/shared/modal'
import { Typography } from '@/shared/typography/typography'

import s from './logOutMaodal.module.scss'

type Props = {
  isOpen: boolean
  setIsOpenAction: (toggle: boolean) => void
}
export const LogOutModal: FC<Props> = ({ isOpen, setIsOpenAction }) => {
  const { handleLogOut } = useLogOut()

  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpenAction} title={'Log Out'}>
        <Typography variant={'regular_text_16'}>{`Are you really want to log out of your account “
        email@.com”`}</Typography>
        <div className={s.buttons}>
          <Button onClick={handleLogOut} variant={'outline'}>
            Yes
          </Button>
          <Button onClick={() => setIsOpenAction(false)}>No</Button>
        </div>
      </Modal>
    </>
  )
}
