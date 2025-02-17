import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, useId, useState } from 'react'

import CloseOutline from '@/shared/input/icons/CloseOutline'
import EyeOffOutline from '@/shared/input/icons/EyeOffOutline'
import EyeOutline from '@/shared/input/icons/EyeOutline'
import SearchOutline from '@/shared/input/icons/SearchOutline'
import { Typography } from '@/shared/typography/typography'
import clsx from 'clsx'

import s from './Input.module.scss'

export type InputProps = {
  errorText?: string
  isRequired?: boolean
  label?: string
  onClearClick?: () => void
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  value?: string
  variant?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

type InputRef = ElementRef<'input'>

export const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    className,
    disabled,
    errorText,
    isRequired = false,
    label,
    onClearClick,
    onEnter,
    onKeyDown,
    placeholder,
    value,
    variant = 'text',
    ...rest
  } = props
  const [showPassword, setShowPassword] = useState(false)
  const inputId = useId()

  const isPassword = variant === 'password'
  const inputType = !showPassword && isPassword ? 'password' : 'text'
  const isSearch = variant === 'search'
  const isShowClearButton = isSearch && onClearClick && value?.length! > 0

  const classNames = {
    button: clsx(s.passwordControl, errorText && s.error, disabled && s.disabled, s.showIcon),
    clearIcon: clsx(s.clearIcon, disabled && s.disabled),
    input: clsx(s.input, s[variant], errorText && s.error, disabled && s.disabled, className),
    label: clsx(s.label, disabled && s.disabled),
    searchIcon: clsx(s.iconSearch, disabled && s.disabled),
  }

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      onEnter?.(e)
    }
    onKeyDown?.(e)
  }

  const showPasswordHandler = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <div className={s.container}>
      {label && (
        <label className={s.labelContainer} htmlFor={inputId}>
          <Typography className={classNames.label} variant={'regular_text_14'}>
            {label}
          </Typography>
        </label>
      )}
      <div className={s.inputContainer}>
        {isSearch && <SearchOutline className={classNames.searchIcon} />}
        <input
          className={classNames.input}
          disabled={disabled}
          id={inputId}
          onKeyDown={onKeyPressHandler}
          placeholder={placeholder}
          ref={ref}
          type={inputType}
          {...rest}
        />
        {isPassword && (
          <button
            className={classNames.button}
            disabled={disabled}
            onClick={showPasswordHandler}
            type={'button'}
          >
            {showPassword ? (
              <EyeOutline className={s.icon} />
            ) : (
              <EyeOffOutline className={s.icon} />
            )}
          </button>
        )}
        {isShowClearButton && (
          <button
            className={classNames.clearIcon}
            disabled={disabled}
            onClick={onClearClick}
            type={'button'}
          >
            <CloseOutline className={s.icon} />
          </button>
        )}
      </div>
      {!!errorText && <Typography className={s.errorMessage}>{errorText}</Typography>}
    </div>
  )
})

Input.displayName = 'Input'
