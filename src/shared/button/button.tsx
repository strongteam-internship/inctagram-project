import React, { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'link' | 'outline' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

type ButtonRef<T extends ElementType> = React.ElementRef<T>

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
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className} ${
        Component === 'a' ? s.asLink : ''
      }`}
      ref={ref}
      {...rest}
    >
      <span className={s.valueBox}>{children}</span>
    </Component>
  )
})

Button.displayName = 'Button'
