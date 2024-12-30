'use client'
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

type AvoidElements = 'a' | 'h1' | 'h2' | 'h3' | 'p'
export type AvoidVariants =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'Large'
  | 'bold_text_14'
  | 'bold_text_16'
  | 'medium_text_14'
  | 'regular_link'
  | 'regular_text_14'
  | 'regular_text_16'
  | 'semi_bold_small_text_12'
  | 'small_link'
  | 'small_text_12'

const Variants: Record<AvoidVariants, { className: string; tag: AvoidElements }> = {
  H1: {
    className: s.H1,
    tag: 'h1',
  },
  H2: {
    className: s.H2,
    tag: 'h2',
  },
  H3: {
    className: s.H3,
    tag: 'h3',
  },
  Large: {
    className: s.Large,
    tag: 'p',
  },
  bold_text_14: {
    className: s.bold_text_14,
    tag: 'p',
  },
  bold_text_16: {
    className: s.bold_text_16,
    tag: 'p',
  },
  medium_text_14: {
    className: s.medium_text_14,
    tag: 'p',
  },
  regular_link: {
    className: s.regular_link,
    tag: 'a',
  },
  regular_text_14: {
    className: s.regular_text_14,
    tag: 'p',
  },
  regular_text_16: {
    className: s.regular_text_16,
    tag: 'p',
  },
  semi_bold_small_text_12: {
    className: s.semi_bold_small_text_12,
    tag: 'p',
  },
  small_link: {
    className: s.small_link,
    tag: 'a',
  },
  small_text_12: {
    className: s.small_text_12,
    tag: 'p',
  },
} as const

type VariantMapping = typeof Variants

type Props<V extends keyof VariantMapping> = {
  align?: 'center' | 'left' | 'right'
  children: ReactNode | string | string[]
  variant?: V
} & Omit<ComponentPropsWithoutRef<VariantMapping[V]['tag']>, 'children'> &
  (V extends 'regular_link' | 'small_link' ? { href: string } : {})

export function Typography<V extends keyof VariantMapping>({
  align,
  children,
  variant,
  ...props
}: Props<V>) {
  let Component
  let className = align ? `${s[align]} ` : ''

  if (variant) {
    Component = Variants[variant].tag as ElementType
    className += Variants[variant].className
  } else {
    Component = 'p'
    className += 'regular_text_16'
  }

  return (
    <Component className={`${className}`} {...props}>
      {children}
    </Component>
  )
}
