'use client'

import { useState } from 'react'

import { useAppDispatch } from '@/application/hooks/hooks'
import { setIsLoggedIn } from '@/application/model/app/appSlice'
import SvgLogOut from '@/assets/svg/icons/components/LogOut'
import { useGetMeQuery } from '@/features/auth/api/authApi'
import { Button } from '@/shared/button/button'
import { Modal } from '@/shared/modal'
import { Typography } from '@/shared/typography/typography'

import s from './LogOut.module.scss'

export function LogOut() {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()
  const { data } = useGetMeQuery()

  const handleLogOut = () => {
    dispatch(setIsLoggedIn(false))
  }

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
        ${data?.email}”`}</Typography>
        <div className={s.buttons}>
          <Button
            onClick={() => {
              handleLogOut()
            }}
            variant={'outline'}
          >
            Yes
          </Button>
          <Button onClick={() => setIsOpen(false)}>No</Button>
        </div>
      </Modal>
    </>
  )
}
