'use client'

import { useEffect, useState } from 'react'

import { useGetCheckPasswordRecoveryCodeMutation } from '@/features/auth/api/authApi'
import { CreateNewPasswordForm } from '@/features/auth/ui/passwordRecovery/CreateNewPassword'
import { PasswordRecovery } from '@/features/auth/ui/passwordRecovery/PasswordRecovery'
import { Modal } from '@/shared/modal'
import { Typography } from '@/shared/typography/typography'
import { useSearchParams } from 'next/navigation'

import s from './PasswordRecoveryPage.module.scss'

export function PasswordRecoveryPage() {
  const [openModal, setOpenModal] = useState(false)
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const [getCodeRecoveryCheck, { isError }] = useGetCheckPasswordRecoveryCodeMutation()

  useEffect(() => {
    code && getCodeRecoveryCheck({ recoveryCode: code })
  }, [code, getCodeRecoveryCheck])

  const onSubmitHandler = () => {
    setOpenModal(prev => !prev)
  }

  if (!code || isError) {
    return <PasswordRecovery />
  }

  return (
    <>
      <CreateNewPasswordForm onSubmitAction={onSubmitHandler} recoveryCode={code} />

      {openModal && (
        <Modal open={openModal} setOpen={onSubmitHandler} title={'Password recovery'}>
          <Typography className={s.modal} variant={'regular_text_16'}>
            Your password has been successfully changed to a new one. Good luck=)
          </Typography>
        </Modal>
      )}
    </>
  )
}
