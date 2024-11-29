import React, { ChangeEvent, ComponentPropsWithoutRef, useEffect, useId, useState } from 'react'

import clsx from 'clsx'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  isRequired?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Checkbox = (props: CheckboxProps) => {
  const { checked, children = 'Check-box', className, disabled, isRequired = true, ...rest } = props

  const [isChecked, setIsChecked] = useState<boolean>(checked ?? false)
  const id = useId()

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked)
    }
  }, [checked])

  const checkboxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  return (
    <div className={clsx(className, s.customCheckbox)}>
      <input
        checked={isChecked}
        disabled={disabled}
        id={id}
        onChange={checkboxChangeHandler}
        required={isRequired}
        type={'checkbox'}
        {...rest}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}
