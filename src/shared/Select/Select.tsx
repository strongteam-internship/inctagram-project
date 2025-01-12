import React, { ReactNode, type SelectHTMLAttributes, useState } from 'react'

import ArrowIosDownOutline from '@/assets/svg/icons/components/ArrowIosDownOutline'

import style from './Select.module.scss'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  border?: string
  children: ReactNode
  color?: string
  disabled?: boolean
  selectedItem?: string
}

export const Select = (props: SelectProps) => {
  const { border, children, color, disabled, selectedItem, ...otherProps } = props
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(selectedItem)

  const toggling = () => {
    setIsOpen(!isOpen)
  }

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }
  const renderSelectOption = (arr: any) => {
    let result = null

    arr.forEach(children, child => {
      if (child.props.value === selectedOption) {
        result = React.cloneElement(child as React.ReactElement<any>, {})
      }
    })

    return result ? result : 'Select an option'
  }

  return (
    <div className={`${style.DropDownContainer}`}>
      <button
        className={`${style.DropDownHeader} ${
          isOpen ? style.active : ''
        } ${disabled ? style.disabled : ''}`}
        disabled={disabled}
        onClick={toggling}
        style={{ border, color }}
        type={'button'}
      >
        {/*{selectedOption || 'Select an option'}*/}
        <div className={style.options}>
          {renderSelectOption(React.Children)}
          <ArrowIosDownOutline className={style.arrow} />
        </div>
      </button>
      {isOpen && (
        <div className={`${style.DropDownListContainer}`}>
          <div className={`${style.DropDownList}`}>
            {React.Children.map(children, child =>
              React.cloneElement(child as React.ReactElement<any>, {
                className: `${style.ListItem}`,
                onClick: onOptionClicked((child as React.ReactElement<any>).props.value),
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}

interface OptionProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  value: string
}

export const Option = ({ children, className, onClick, value }: OptionProps) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}
