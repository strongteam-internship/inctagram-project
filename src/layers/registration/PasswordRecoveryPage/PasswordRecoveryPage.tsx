'use client'

import { useState } from 'react'

import { useGetCheckPasswordRecoveryCodeMutation } from '@/features/auth/api/authApi'
import { CreateNewPasswordForm } from '@/features/auth/ui/passwordRecovery/CreateNewPassword'
import { PasswordRecovery } from '@/features/auth/ui/passwordRecovery/PasswordRecovery'
import { Typography } from '@/shared/typography/typography'
import { useSearchParams } from 'next/navigation'

export function PasswordRecoveryPage() {
  const [openModal, setOpenModal] = useState(false) //Todo: Прилепить модалку
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const email = searchParams.get('email')
  const [getCodeRecoveryCheck, { isError }] = useGetCheckPasswordRecoveryCodeMutation()

  // useEffect(() => {
  //   code && getCodeRecoveryCheck({ recoveryCode: code })
  // }, [code, getCodeRecoveryCheck])

  const onSubmitHandler = () => {
    console.log('email', email)
  }

  if (!code) {
    return <PasswordRecovery />
  }

  return (
    <>
      <CreateNewPasswordForm onSubmitAction={onSubmitHandler} recoveryCode={code} />

      {openModal && (
        <Typography>
          Your password has been successfully changed to a new one. Good luck=)
        </Typography>
      )}
    </>
  )
}
