'use client'

import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { FormProvider, SubmitHandler, useForm, useFormContext } from 'react-hook-form'

import { Input } from '@/shared/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ZodTypeAny, z } from 'zod'

type FormProps<T extends ZodTypeAny> = {
  children: ReactNode
  onSubmit: SubmitHandler<z.infer<T>> // Типизация функции onSubmit
  validationRules: T
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

// Компонент для текстового поля формы
export function FormTextField({
  label,
  name,
  variant,
}: {
  label: string
  name: string
  variant: 'password' | 'text'
}) {
  const { formState, register } = useFormContext()

  const errorMessage =
    typeof formState?.errors[name]?.message === 'string'
      ? formState.errors[name].message
      : undefined

  return (
    <>
      <Input label={label} {...register(name)} errorText={errorMessage} variant={variant} />
    </>
  )
}

// Компонент формы
export function FormSecond<T extends ZodTypeAny>({
  children,
  onSubmit,
  validationRules,
  ...rest
}: FormProps<T>) {
  // Инициализация useForm с использованием Zod для валидации
  const methods = useForm<z.infer<T>>({ mode: 'onBlur', resolver: zodResolver(validationRules) })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)} // Обертка onSubmit через handleSubmit
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  )
}
