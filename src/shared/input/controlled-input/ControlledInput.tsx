import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/shared/input'

type ControlledInputProps<T extends FieldValues> = Omit<
  InputProps,
  'disabled' | 'onBlur' | 'onChange' | 'ref' | 'value'
> &
  UseControllerProps<T>

export const ControlledInput = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  errorText,
  name,
  rules,
  shouldUnregister,
  ...props
}: ControlledInputProps<T>) => {
  const {
    field: { onBlur, onChange, ref, value, ...field },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Input
      {...props}
      errorText={errorText ?? error?.message}
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
      value={value ?? ''}
      {...field}
    />
  )
}
