'use client'

import { ComponentPropsWithoutRef, ReactNode, memo } from 'react'

type FormProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<'form'>



// eslint-disable-next-line react/display-name
export const Form = memo(({ children, ...rest }: FormProps) => {
  return <form {...rest}>{children}</form>
})
