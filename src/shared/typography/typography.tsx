'use client'
import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './typography.module.scss'

type AvoidElements = 'a' | 'h1' | 'h2' | 'h3' | 'p'
export type AvoidVariants =
  | 'Large'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'regular_text_16'
  | 'bold_text_16'
  | 'regular_text_14'
  | 'medium_text_14'
  | 'bold_text_14'
  | 'small_text_12'
  | 'semi_bold_small_text_12'
  | 'regular_link'
  | 'small_link'

const Variants: Record<AvoidVariants, { tag: AvoidElements; className: string }> = {
  Large: {
    tag: 'p',
    className: s.Large,
  },
  H1: {
    tag: 'h1',
    className: s.H1,
  },
  H2: {
    tag: 'h2',
    className: s.H2,
  },
  H3: {
    tag: 'h3',
    className: s.H3,
  },
  regular_text_16: {
    tag: 'p',
    className: s.regular_text_16,
  },
  bold_text_16: {
    tag: 'p',
    className: s.bold_text_16,
  },
  regular_text_14: {
    tag: 'p',
    className: s.regular_text_14,
  },
  medium_text_14: {
    tag: 'p',
    className: s.medium_text_14,
  },
  bold_text_14: {
    tag: 'p',
    className: s.bold_text_14,
  },
  small_text_12: {
    tag: 'p',
    className: s.small_text_12,
  },
  semi_bold_small_text_12: {
    tag: 'p',
    className: s.semi_bold_small_text_12,
  },
  regular_link: {
    tag: 'a',
    className: s.regular_link,
  },
  small_link: {
    tag: 'a',
    className: s.small_link,
  },
} as const

type VariantMapping = typeof Variants

type Props<V extends keyof VariantMapping> = {
  variant?: V
  children: string
  align: 'right' | 'left' | 'center'
} & (V extends 'regular_link' | 'small_link' ? { href: string } : {}) &
  Omit<ComponentPropsWithoutRef<VariantMapping[V]['tag']>, 'children'>

export function Typography<V extends keyof VariantMapping>({
  children,
  variant,
  align,
  ...props
}: Props<V>) {
  let Component
  let className = `${s[align]} `

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
