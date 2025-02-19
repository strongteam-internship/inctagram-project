'use client'

import { useState } from 'react'

import { useLogOut } from '@/application/hooks/custom/useLogOut'
import SvgLogOut from '@/assets/svg/icons/components/LogOut'
import { Button } from '@/shared/button/button'
import { Modal } from '@/shared/modal'
import { Typography } from '@/shared/typography/typography'

import s from './LogOut.module.scss'

export function LogOut() {
  const [isOpen, setIsOpen] = useState(false)

  const { handleLogOut } = useLogOut()

  return (
    <>
      <Modal
        open={isOpen}
        setOpen={setIsOpen}
        title={'Log Out'}
        trigger={
          <Button variant={'link'}>
            <SvgLogOut />
            <Typography variant={'medium_text_14'}>Log Out</Typography>
          </Button>
        }
      >
        <Typography variant={'regular_text_16'}>{`Are you really want to log out of your account “
        email@.com”`}</Typography>
        <div className={s.buttons}>
          <Button onClick={handleLogOut} variant={'outline'}>
            Yes
          </Button>
          <Button onClick={() => setIsOpen(false)}>No</Button>
        </div>
      </Modal>
    </>
  )
}
