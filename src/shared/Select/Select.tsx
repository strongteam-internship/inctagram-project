import React, { type SelectHTMLAttributes, useState } from 'react'
import cls from './Select.module.scss'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[]
  selectedItem?: string
  disabled?: boolean
  color?: string
}

export const Select = (props: SelectProps) => {
  const { options, selectedItem, disabled, ...otherProps } = props
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(selectedItem)
  const toggling = () => {
    setIsOpen(!isOpen)
  }
  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  // const iconClasses = `${cls.Icon}`

  return (
    <div className={`${cls.DropDownContainer}`}>
      <button
        type="button"
        className={`${cls.DropDownHeader} ${
          isOpen ? cls.active : ''
        } ${disabled ? cls.disabled : ''}`}
        disabled={disabled}
        onClick={toggling}
      >
        {selectedOption || options[0]}
      </button>
      {isOpen && (
        <div>
          <div className={`${cls.DropDownList}`}>
            {options.map(option => (
              <li
                className={`${cls.ListItem}`}
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                {option}
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
