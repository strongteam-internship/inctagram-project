import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useEffect,
  useId,
  useState,
} from 'react'

import CloseOutline from '@/shared/input/icons/CloseOutline'
import EyeIcon from '@/shared/input/icons/EyeIcon'
import EyeOffIcon from '@/shared/input/icons/EyeOffIcon'
import SearchIcon from '@/shared/input/icons/SearchIcon'
import { Typography } from '@/shared/typography/typography'
import clsx from 'clsx'

import s from './Input.module.scss'

export type InputProps = {
  errorText?: string
  isRequired?: boolean
  label?: string
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
    onChange,
    placeholder,
    value,
    variant = 'text',
    ...rest
  } = props
  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const inputId = useId()

  const isPassword = variant === 'password'
  const inputType = !showPassword && isPassword ? 'password' : 'text'
  const isSearch = variant === 'search'

  const classNames = {
    button: clsx(s.passwordControl, errorText && s.error, disabled && s.disabled, s.showIcon),
    clearIcon: clsx(s.clearIcon, disabled && s.disabled),
    input: clsx(s.input, s[variant], errorText && s.error, disabled && s.disabled, className),
    label: clsx(s.label, disabled && s.disabled),
    searchIcon: clsx(s.iconSearch, disabled && s.disabled),
  }

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    setInputValue(e.currentTarget.value)
  }

  const clearInputHandler = () => {
    setInputValue('')
  }

  const showPasswordHandler = () => {
    setShowPassword(prev => !prev)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className={s.container}>
      {label && (
        <label htmlFor={inputId}>
          <Typography className={classNames.label} variant={'regular_text_14'}>
            {label}
          </Typography>
        </label>
      )}
      <div className={s.inputContainer}>
        {isSearch && <SearchIcon className={classNames.searchIcon} />}
        <input
          className={classNames.input}
          disabled={disabled}
          id={inputId}
          onChange={inputChangeHandler}
          placeholder={placeholder}
          ref={ref}
          type={inputType}
          value={inputValue}
          {...rest}
        />
        {isPassword && !!inputValue && (
          <button className={classNames.button} onClick={showPasswordHandler} type={'button'}>
            {showPassword ? <EyeIcon className={s.icon} /> : <EyeOffIcon className={s.icon} />}
          </button> // временный код
          // <Button
          //   className={''}
          //   disabled={disabled}
          //   onClick={showPasswordHandler}
          //   variant={'icon'}
          // >
          //   {showPassword ? (
          //     <EyeOutline className={s.icon} />
          //   ) : (
          //     <EyeOffOutline className={s.icon} />
          //   )}
          // </Button>
        )}
        {isSearch && !!inputValue && (
          <button
            className={clsx(s.clearIcon, disabled && s.disabled)}
            disabled={disabled}
            onClick={clearInputHandler}
            type={'button'}
          >
            <CloseOutline className={s.icon} />
          </button> // временный код
          // <Button
          //   className={clsx(s.clearIcon, disabled && s.disabled)}
          //   disabled={disabled}
          //   onClick={clearInputHandler}
          //   variant={'icon'}
          // >
          //   <CloseOutline className={s.icon} />
          // </Button>
        )}
      </div>
      {!!errorText && <Typography className={s.errorMessage}>{errorText}</Typography>}
    </div>
  )
})

Input.displayName = 'Input'
