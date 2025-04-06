import { forwardRef } from 'react'

import Image from 'next/image'

type Props = {
  alt: string
  size: 'large' | 'medium' | 'small'
  src: string
}

export const Avatar = forwardRef<HTMLDivElement, Props>(({ alt, size, src, ...rest }: Props) => {
  const sizes = {
    large: { height: 204, width: 204 },
    medium: { height: 48, width: 48 },
    small: { height: 36, width: 36 },
  }

  return (
    <div {...rest}>
      <Image alt={alt} height={sizes[size].height} src={src} width={sizes[size].width} />
    </div>
  )
})
Avatar.displayName = 'Avatar'
