'use client'
import { useState } from 'react'

import { CreateNewPassword } from '@/features/auth/ui/passwordRecovery/CreateNewPassword'

export default function SignUp() {
  const [password, setPassword] = useState<string>('')

  const submitHandler = (password: string) => {
    setPassword(password)
  }

  return (
    <div>
      <CreateNewPassword onSubmitHandler={password => submitHandler(password)} />
    </div>
  )
}
