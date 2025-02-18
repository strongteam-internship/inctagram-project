'use client'

import { useState } from 'react'

import { useAppDispatch } from '@/application/hooks/hooks'
import { setIsLoggedIn } from '@/application/model/app/appSlice'
import SvgLogOut from '@/assets/svg/icons/components/LogOut'
import { useGetLogOutMutation } from '@/features/auth/api/authApi'
import { Button } from '@/shared/button/button'
import { Modal } from '@/shared/modal'
import { Typography } from '@/shared/typography/typography'
import { useRouter } from 'next/navigation'

import s from './LogOut.module.scss'

export function LogOut() {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()
  const [getLogOut] = useGetLogOutMutation()
  const router = useRouter()

  const handleLogOut = () => {
    getLogOut()
      .unwrap()
      .then(() => {
        dispatch(setIsLoggedIn(false))
        router.push('/api/v1/auth/login')
        localStorage.removeItem('token')
      })
      .catch(error => {
        throw new Error('Unexpected error')
      })
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
        email@.com”`}</Typography>
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
