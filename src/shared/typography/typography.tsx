'use client'
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type AvoidElements = 'a' | 'h1' | 'h2' | 'h3' | 'p'
type AvoidVariants =
  | 'Large'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'regular_text_16'
  | 'bold_text_16'
  | 'regular_text_14'
  | 'medium_text_14'
  | 'bold_text_14'
  | 'small_text_14'
  | 'Semi_bold_small_text_14'
  | 'regular_link'
  | 'small_link'

const Variants: Record<AvoidVariants, { tag: AvoidElements; className: string }> = {
  Large: {
    tag: 'p',
    className: '',
  },
  H1: {
    tag: 'h1',
    className: '',
  },
  H2: {
    tag: 'h2',
    className: '',
  },
  H3: {
    tag: 'h3',
    className: '',
  },
  regular_text_16: {
    tag: 'p',
    className: '',
  },
  bold_text_16: {
    tag: 'p',
    className: '',
  },
  regular_text_14: {
    tag: 'p',
    className: '',
  },
  medium_text_14: {
    tag: 'p',
    className: '',
  },
  bold_text_14: {
    tag: 'p',
    className: '',
  },
  small_text_14: {
    tag: 'p',
    className: '',
  },
  Semi_bold_small_text_14: {
    tag: 'p',
    className: '',
  },
  regular_link: {
    tag: 'a',
    className: '',
  },
  small_link: {
    tag: 'a',
    className: '',
  },
} as const

type VariantMapping = typeof Variants

type Props<V extends keyof VariantMapping> = {
  variant?: V
  children: ReactNode
} & (V extends 'regular_link' | 'small_link' ? { href: string } : {}) &
  Omit<ComponentPropsWithoutRef<VariantMapping[V]['tag']>, 'children'>

export function Typography<V extends keyof VariantMapping>({
  children,
  variant,
  ...props
}: Props<V>) {
  let Component
  let className

  if (variant) {
    Component = Variants[variant].tag as ElementType
    className = Variants[variant].className
  } else {
    Component = 'p'
    className = 'regular_text_16'
  }

  return (
    <Component className={`${className}`} {...props}>
      {children}
    </Component>
  )
}

//Large
// Font: Inter
// Font weight: 600
// Font size: 26pxpx
// Row height: 36px
// Letter spacing: 0px
// Align: Align left

//H1
// Font: Inter
// Font weight: 700
// Font size: 20pxpx
// Row height: 36px
// Letter spacing: 0px
// Align: Align left

//H2
// Font: Inter
// Font weight: 700
// Font size: 18pxpx
// Row height: 24px
// Letter spacing: 0px
// Align: Align left

//H3
// Font: Inter
// Font weight: 600
// Font size: 16pxpx
// Row height: 24px
// Letter spacing: 0px
// Align: Align left

//regular_text_16
// Font: Inter
// Font weight: 400
// Font size: 16pxpx
// Row height: 24px
// Letter spacing: 0%
// Align: Align left

//Bold_text_16
// Font: Inter
// Font weight: 700
// Font size: 16pxpx
// Row height: 24px
// Letter spacing: 0%
// Align: Align left

//regular_text 14
// Font: Inter
// Font weight: 400
// Font size: 14pxpx
// Row height: 24px
// Letter spacing: 0%
// Align: Align left

//Medium_text 14
// Font: Inter
// Font weight: 500
// Font size: 14pxpx
// Row height: 24px
// Letter spacing: 0%
// Align: Align left

//bold_text 14
// Font: Inter
// Font weight: 700
// Font size: 14pxpx
// Row height: 24px
// Letter spacing: 0%
// Align: Align left

//small_text
// Font: Inter
// Font weight: 400
// Font size: 12pxpx
// Row height: 16px
// Letter spacing: 0%
// Align: Align left

//Semi-bold small_text
// Font: Inter
// Font weight: 600
// Font size: 12pxpx
// Row height: 16px
// Letter spacing: 0%
// Align: Align left

//regular_link
// Font: Inter
// Font weight: 400
// Font size: 14pxpx
// Row height: 24px
// Letter spacing: 0%
// Align: Align left

//small_link
// Font: Inter
// Font weight: 400
// Font size: 12pxpx
// Row height: 16px
// Letter spacing: 0%
// Align: Align left
