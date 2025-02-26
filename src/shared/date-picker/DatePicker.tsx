import React, { ComponentProps, FC, ReactNode, forwardRef, useId } from 'react'
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import * as RDP from 'react-datepicker'

import { clsx } from 'clsx'

const RDPC = (((RDP.default as any).default as any) ||
  (RDP.default as any) ||
  (RDP as any)) as typeof RDP.default

import { Typography } from '@/shared/typography/typography'
import { format } from 'date-fns'

import InputStyles from '../input/Input.module.scss'
import s from './DatePicker.module.scss'

import {
  ArrowIosBackOutline,
  ArrowIosForwardOutline,
  CalendarOutline,
} from '../../assets/svg/icons/components'

export type DatePickerProps = {
  disabled?: boolean
  endDate?: Date | null
  errorMessage?: string
  label?: ReactNode
  placeholder?: string
  required?: boolean
  setEndDate?: (date: Date | null) => void
  setStartDate: (date: Date | null) => void
  startDate: Date | null
} & ComponentProps<'div'>

export const DatePicker: FC<DatePickerProps> = ({
  className,
  disabled,
  endDate,
  errorMessage,
  label,
  placeholder,
  required,
  setEndDate,
  setStartDate,
  startDate,
  ...rest
}) => {
  const isRange = endDate !== undefined
  const showError = !!errorMessage && errorMessage.length > 0

  const classNames = {
    calendar: s.calendar,
    day: () => s.day,
    errorText: s.errorText,
    input: clsx(s.input, InputStyles.input, showError && s.error, isRange && s.range),
    inputContainer: s.inputContainer,
    popper: s.popper,
    root: clsx(s.root, s.datePickerWrapper, className),
  }

  const DatePickerHandler = (dates: [Date | null, Date | null] | Date) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates

      setStartDate(start)
      setEndDate?.(end)
    } else {
      setStartDate(dates)
    }
  }

  const datePickerRef = React.useRef<any>(null)

  return (
    <div className={clsx(s.root, s.datePickerWrapper)} {...rest}>
      <RDPC
        calendarClassName={classNames.calendar}
        calendarStartDay={1}
        className={classNames.input}
        customInput={
          <CustomInput
            disabled={disabled}
            label={label}
            onIconClick={() => datePickerRef.current?.setOpen(true)}
          />
        }
        dateFormat={'dd/MM/yyyy'}
        dayClassName={classNames.day}
        disabled={disabled}
        endDate={endDate}
        formatWeekDay={formatWeekDay}
        onChange={DatePickerHandler}
        placeholderText={placeholder}
        popperClassName={classNames.popper}
        popperModifiers={
          [
            {
              name: 'offset',
              options: {
                offset: [0, -11],
              },
            },
          ] as any
        }
        ref={datePickerRef}
        renderCustomHeader={CustomHeader}
        selected={startDate}
        selectsRange={isRange as true}
        showPopperArrow={false}
        startDate={startDate}
      />
      {showError && <p className={classNames.errorText}>{errorMessage}</p>}
    </div>
  )
}

type CustomInputProps = {
  disabled?: boolean
  label?: ReactNode
  onIconClick?: () => void
  required?: boolean
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ disabled, label, onIconClick, required, ...rest }, ref) => {
    const classNames = {
      icon: clsx(s.icon, disabled && s.disabled),
      inputContainer: s.inputContainer,
      label: s.label,
    }

    const inputId = useId()

    return (
      <>
        <label className={s.labelContainer} htmlFor={inputId}>
          <Typography className={classNames.label} variant={'regular_text_14'}>
            {label}
          </Typography>
        </label>
        <div className={classNames.inputContainer}>
          <input disabled={disabled} id={inputId} ref={ref} {...rest} />
          <div className={classNames.icon} onClick={onIconClick}>
            <CalendarOutline />
          </div>
        </div>
      </>
    )
  }
)

const CustomHeader = ({ date, decreaseMonth, increaseMonth }: ReactDatePickerCustomHeaderProps) => {
  const classNames = {
    backFrowardButton: s.backFrowardButton,
    button: s.button,
    buttonBox: s.buttonBox,
    header: s.header,
  }

  const headerText = capitalizeFirstLetter(format(date, 'LLLL Y'))

  return (
    <div className={classNames.header}>
      <div>{headerText}</div>
      <div className={classNames.buttonBox}>
        <button className={classNames.button} onClick={decreaseMonth} type={'button'}>
          <ArrowIosBackOutline className={classNames.backFrowardButton} />
        </button>

        <button className={classNames.button} onClick={increaseMonth} type={'button'}>
          <ArrowIosForwardOutline className={classNames.backFrowardButton} />
        </button>
      </div>
    </div>
  )
}

const formatWeekDay = (day: string) => {
  const shortDay = day.substring(0, 2)

  return shortDay.charAt(0).toUpperCase() + shortDay.charAt(1).toLowerCase()
}

const capitalizeFirstLetter = (text: string) => {
  return text[0].toUpperCase() + text.slice(1)
}

CustomInput.displayName = 'CustomInput'
