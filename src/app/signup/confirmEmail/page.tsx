'use client'
import { ResendEmailForm } from '@/features/auth/ui/resendEmail/resendEmailForm'
import { useSearchParams } from '@storybook/nextjs/navigation.mock'

export default function ConfirmEmail() {
  const params = useSearchParams()
  const code = params.get('code')

  return (
    <div>
      <ResendEmailForm />
    </div>
  )
}
