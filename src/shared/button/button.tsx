import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'outline' | 'link'
    fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button = (props: ButtonProps) => {
    const { variant = 'primary', fullWidth, className,  ...rest } = props

    return (
        <button
            className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className} 
            }`}
            {...rest}
        >
        </button>
    )
}
