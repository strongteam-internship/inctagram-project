import { forwardRef } from 'react'

import Image from 'next/image'

import s from './avatar.module.scss'

type Props = {
  alt: string
  size: 'large' | 'medium' | 'small'
  src: string
}

export const Avatar = forwardRef<HTMLDivElement, Props>(
  ({ alt, size, src, ...rest }: Props, ref) => {
    const sizes = {
      large: { height: 204, width: 204 },
      medium: { height: 48, width: 48 },
      small: { height: 36, width: 36 },
    }

    return (
      <div {...rest} ref={ref}>
        <Image
          alt={alt}
          className={s.avatar}
          height={sizes[size].height}
          src={src}
          width={sizes[size].width}
        />
      </div>
    )
  }
)
Avatar.displayName = 'Avatar'
