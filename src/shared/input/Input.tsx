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
import EyeOffOutline from '@/shared/input/icons/EyeOffOutline'
import EyeOutline from '@/shared/input/icons/EyeOutline'
import SearchOutline from '@/shared/input/icons/SearchOutline'
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
  const id = useId()

  const isPassword = variant === 'password'
  const inputType = !showPassword && isPassword ? 'password' : 'text'
  const isSearch = variant === 'search'

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
        <p>Input</p> // временный код
        // <Typography
        //   as={'label'}
        //   className={clsx(disabled && s.disabled)}
        //   grey
        //   htmlFor={id}
        //   isRequired={isRequired}
        // >
        //   {label}
        // </Typography>
      )}
      <div className={s.inputContainer}>
        {isSearch && <SearchOutline className={clsx(s.iconSearch, disabled && s.disabled)} />}
        <input
          className={clsx(
            s.input,
            s[variant],
            errorText && s.error,
            disabled && s.disabled,
            className
          )}
          disabled={disabled}
          id={id}
          onChange={inputChangeHandler}
          placeholder={placeholder}
          ref={ref}
          type={inputType}
          value={inputValue}
          {...rest}
        />
        {isPassword && !!inputValue && (
          <button
            className={clsx(
              s.passwordControl,
              errorText && s.error,
              disabled && s.disabled,
              s.showIcon
            )}
            onClick={showPasswordHandler}
            type={'button'}
          >
            {showPassword ? (
              <EyeOutline className={s.icon} />
            ) : (
              <EyeOffOutline className={s.icon} />
            )}
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
      {!!errorText && (
        <span className={s.errorMessage}>{errorText}</span>
        // <Typography as={'span'} variant={'error'}>
        //   {errorText}
        // </Typography>
      )}
    </div>
  )
})

// Указываем имя компонента для React DevTools
Input.displayName = 'Input'
