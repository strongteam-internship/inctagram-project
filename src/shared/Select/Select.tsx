import React, { type SelectHTMLAttributes, useState, ReactNode } from 'react'
import style from './Select.module.scss'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode
  selectedItem?: string
  disabled?: boolean
  color?: string
  border?: string
}

export const Select = (props: SelectProps) => {
  const { children, selectedItem, disabled, color, border, ...otherProps } = props
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(selectedItem)

  const toggling = () => {
    setIsOpen(!isOpen)
  }

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }

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
        {selectedOption || 'Select an option'}
      </button>
      {isOpen && (
        <div className={`${style.DropDownListContainer}`}>
          <div className={`${style.DropDownList}`}>
            {React.Children.map(children, child =>
              React.cloneElement(child as React.ReactElement<any>, {
                onClick: onOptionClicked((child as React.ReactElement<any>).props.value),
                className: `${style.ListItem}`,
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}

interface OptionProps {
  value: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export const Option = ({ value, children, onClick, className }: OptionProps) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  )
}