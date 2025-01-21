import React, { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'link' | 'outline' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef<HTMLButtonElement, ButtonProps<ElementType>>((props, ref) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={clsx(
        s.button,
        s[variant],
        fullWidth ? s.fullWidth : '',
        Component === 'a' ? s.asLink : '',
        className
      )}
      ref={ref}
      {...rest}
    >
      <span className={s.valueBox}>{children}</span>
    </Component>
  )
})

Button.displayName = 'Button'
