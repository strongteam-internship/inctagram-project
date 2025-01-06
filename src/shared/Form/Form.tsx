'use client'

import { ComponentPropsWithoutRef, ReactNode, memo, useEffect } from 'react'
import { FormProvider, Path, SubmitHandler, useForm, useFormContext } from 'react-hook-form'

import { Button } from '@/shared/button/button'
import { Checkbox } from '@/shared/checkbox/Checkbox'
import { ControlledInput } from '@/shared/input/controlled-input'
import { Typography } from '@/shared/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { ZodTypeAny, z } from 'zod'

import s from './Form.module.scss'

type ErrorMessage<T extends ZodTypeAny> = {
  field: Path<z.infer<T>>
  message: string
}
// Типы пропсов для компонентов
type FormProps<T extends ZodTypeAny> = {
  children: ReactNode
  errors?: ErrorMessage<T>[]
  onSubmit: SubmitHandler<z.infer<T>>
  validationRules: T
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

type TextFieldProps = {
  label: string
  name: string
  variant: 'password' | 'text'
}

type FormBodyProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<'div'>

type FormIconsProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<'div'>

// Рутовый компонент формы
function FormRoot<T extends ZodTypeAny>({
  children,
  className,
  errors,
  onSubmit,
  validationRules,
  ...rest
}: FormProps<T>) {
  const methods = useForm<z.infer<T>>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(validationRules),
  })
  const {
    formState: { isSubmitSuccessful },
    reset,
    setError,
  } = methods
  const classNames = clsx(s.form, className)

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])
  //TODO: Возможно тоже стоит обернуть в useEffect
  if (errors) {
    errors.forEach((error: ErrorMessage<T>) => {
      setError(error.field, { message: error.message })
    })
  }
  //-----------------------------------------------

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        {...rest}
        className={classNames}
        style={{ border: '1px solid black' }}
      >
        {children}
      </form>
    </FormProvider>
  )
}

// Компонент для текстового поля формы
const TextField = memo(({ label, name, variant, ...rest }: TextFieldProps) => {
  TextField.displayName = 'Form.TextField'
  const {
    formState: { errors },
    register,
  } = useFormContext()

  const errorMessage = typeof errors[name]?.message === 'string' ? errors[name].message : undefined

  return (
    <ControlledInput
      label={label}
      {...register(name)} // Используем name как ключ схемы
      errorText={errorMessage}
      variant={variant}
      {...rest}
    />
  )
})

// Компонент для тела формы
function FormBody({ children, className, ...rest }: FormBodyProps) {
  const classNames = clsx(className)

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  )
}

// Компонент для иконок формы
function FormIcons({ children, className, ...rest }: FormIconsProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}
//Компонент кнопки
function FormButton({ children, ...rest }: { children: ReactNode }) {
  const {
    formState: { isValid },
  } = useFormContext()

  return (
    <Button disabled={!isValid} type={'submit'} {...rest}>
      {children}
    </Button>
  )
}
// Компонент для чекбокса
const FormCheckBox = memo(({ children, name }: { children: ReactNode; name: string }) => {
  FormCheckBox.displayName = 'Form.CheckBox'
  const { register, setValue } = useFormContext()

  return (
    <Checkbox>
      <Checkbox.Input
        {...register(name)}
        onChange={e => {
          setValue(name, e.target.checked, { shouldValidate: true }) // Устанавливаем значение и инициируем валидацию
        }}
      />
      <Checkbox.Label>{children}</Checkbox.Label>
    </Checkbox>
  )
})

// Подключение дочерних компонентов формы
type FormCompound = {
  Body: typeof FormBody
  Button: typeof FormButton
  CheckBox: typeof FormCheckBox
  Icons: typeof FormIcons
  TextField: typeof TextField
  Title: typeof Typography
} & typeof FormRoot

const Form = FormRoot as FormCompound

Form.TextField = TextField
Form.Body = FormBody
Form.Icons = FormIcons
Form.Title = Typography
Form.CheckBox = FormCheckBox
Form.Button = FormButton

export { Form }
