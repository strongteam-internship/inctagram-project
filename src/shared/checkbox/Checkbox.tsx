import React, {
  ChangeEvent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
} from 'react'

import clsx from 'clsx'

import s from './Checkbox.module.scss'

// Context type
type CheckboxContextType = {
  checked: boolean
  disabled?: boolean
  id: string
  isRequired?: boolean // Add `isRequired` to the context
  toggle: () => void
}

// Create context
const CheckboxContext = createContext<CheckboxContextType | null>(null)

// Custom hook to use context
const useCheckbox = (): CheckboxContextType => {
  const context = useContext(CheckboxContext)

  if (!context) {
    throw new Error('useCheckbox must be used within a Checkbox.Provider')
  }

  return context
}

// Component props
type CheckboxProps = {
  checked?: boolean
  children: ReactNode
  className?: string
  disabled?: boolean
  isRequired?: boolean
}

type CheckboxInputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'>

type CheckboxLabelProps = {
  children: ReactNode
  className?: string
}

// Compound Checkbox Component
export const Checkbox: {
  Input: React.FC<CheckboxInputProps>
  Label: React.FC<CheckboxLabelProps>
} & React.FC<CheckboxProps> = ({ checked, children, className, disabled, isRequired = false }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked ?? false)
  const id = useId()

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked)
    }
  }, [checked])

  const toggle = () => {
    if (!disabled) {
      setIsChecked(prev => !prev)
    }
  }

  return (
    <CheckboxContext.Provider
      value={{
        checked: isChecked,
        disabled,
        id,
        isRequired,
        toggle,
      }}
    >
      <div className={clsx(className, s.customCheckbox)}>{children}</div>
    </CheckboxContext.Provider>
  )
}

// Input Subcomponent
const CheckboxInput: React.FC<CheckboxInputProps> = props => {
  const { checked, disabled, id, isRequired, toggle } = useCheckbox()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    toggle()
    props.onChange?.(e)
  }

  return (
    <input
      {...props}
      checked={checked}
      className={clsx(s.checkboxInput)}
      disabled={disabled}
      id={id}
      onChange={handleChange}
      required={isRequired}
      type={'checkbox'}
    />
  )
}

// Label Subcomponent
const CheckboxLabel: React.FC<CheckboxLabelProps> = ({ children, className }) => {
  const { disabled, id } = useCheckbox()

  return (
    <label className={clsx(s.checkboxLabel, className, { [s.disabled]: disabled })} htmlFor={id}>
      {children}
    </label>
  )
}

Checkbox.Input = CheckboxInput
Checkbox.Label = CheckboxLabel
