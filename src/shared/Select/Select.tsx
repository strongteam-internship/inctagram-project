import React, { type SelectHTMLAttributes, useState } from 'react'
import style from './Select.module.scss'
import { Typography } from '../typography/typography'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[]
  selectedItem?: string
  disabled?: boolean
  color?: string
  border?: string
}

export const Select = (props: SelectProps) => {
  const { options, selectedItem, disabled, color, border, ...otherProps } = props
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(selectedItem)
  const toggling = () => {
    setIsOpen(!isOpen)
  }
  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  // const iconClasses = `${style.Icon}`

  return (
    <div className={`${style.DropDownContainer}`}>
      <button
        type="button"
        className={`${style.DropDownHeader} ${
          isOpen ? style.active : ''
        } ${disabled ? style.disabled : ''}`}
        disabled={disabled}
        onClick={toggling}
        style={{ color, border }}
      >
        {selectedOption || options[0]}
      </button>
      {isOpen && (
        <div>
          <div className={`${style.DropDownList}`}>
            {options.map(option => (
              <li
                className={`${style.ListItem}`}
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                <Typography variant="regular_text_16">{option}</Typography>
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
