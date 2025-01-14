import React, {
  Children,
  ComponentPropsWithoutRef,
  ComponentType,
  FC,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useState,
} from 'react'

import ArrowIosDownOutline from '@/assets/svg/icons/components/ArrowIosDownOutline'
import clsx from 'clsx'

import style from './Select.module.scss'

type SelectProps = {
  arrowIcon?: ComponentType<{ className?: string }>
  border?: string
  children: ReactElement<OptionProps> | ReactElement<OptionProps>[]
  color?: string
  disabled?: boolean
  onChange?: (value: string) => void
  placeholder?: string
  selectedItem?: string
} & Omit<ComponentPropsWithoutRef<'select'>, 'onChange'>

export const Select: FC<SelectProps> = ({
  arrowIcon: ArrowIcon = ArrowIosDownOutline,
  border,
  children,
  color,
  disabled,
  onChange,
  placeholder = 'Select an option',
  selectedItem,
  ...otherProps
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(selectedItem)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value)
    setIsOpen(false)
    onChange?.(value)
  }

  const renderSelectOption = () => {
    let result = null

    Children.forEach(children, child => {
      if (isValidElement(child) && child.props.value === selectedOption) {
        result = child
      }
    })

    return result || placeholder
  }

  return (
    <div className={style.DropDownContainer}>
      <button
        aria-disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup={'listbox'}
        className={clsx(style.DropDownHeader, isOpen && style.active, disabled && style.disabled)}
        disabled={disabled}
        onClick={toggling}
        role={'combobox'}
        style={{ border, color }}
        type={'button'}
      >
        <div className={style.options}>
          {renderSelectOption()}
          <ArrowIcon className={style.arrow} />
        </div>
      </button>
      {isOpen && (
        <div className={style.DropDownListContainer}>
          <div className={style.DropDownList}>
            {Children.map(children, (child: ReactElement<OptionProps>) =>
              cloneElement(child, {
                className: style.ListItem,
                onClick: onOptionClicked(child?.props.value),
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}

type OptionProps = {
  children: ReactNode
  className?: string
  onClick?: () => void
  value: string
}

export const Option: FC<OptionProps> = ({ children, className, onClick }) => (
  <div className={className} onClick={onClick} role={'option'}>
    {children}
  </div>
)
