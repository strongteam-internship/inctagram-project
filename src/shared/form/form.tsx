'use client'

import { ComponentPropsWithoutRef, FormEvent, ReactNode } from 'react'

type FormProps = {
  children: ReactNode
  onSubmit: (formData: Record<string, boolean | string>) => void
} & ComponentPropsWithoutRef<'form'>

export function Form({ children, onSubmit, ...rest }: FormProps) {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const formValues = Object.fromEntries(formData.entries()) as Record<string, boolean | string>

    for (const key in formValues) {
      if (formValues[key] === 'on') {
        formValues[key] = true
      }
    }

    onSubmit(formValues)
  }

  return (
    <form onSubmit={onSubmitHandler} {...rest}>
      {children}
    </form>
  )
}
