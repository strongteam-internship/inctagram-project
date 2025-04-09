'use client'
import React from 'react'

import { Post } from '@/entities/post/model/types'
import { Avatar } from '@/shared/avatar/avatar'
import { Card } from '@/shared/card'
import { Slider } from '@/shared/slider/Slider'
import { Typography } from '@/shared/typography/typography'
import Link from 'next/link'

import s from './PublicPostCard.module.scss'

export function PublicPostCard({ post }: { post: Post }) {
  console.log(post)

  const [open, setOpen] = React.useState(false)

  const testFn = () => {
    setOpen(true)
  }

  return (
    <div>
      <Card className={s.cardContainer} onClick={testFn}>
        //TODO: Допилить картинки
        <div style={{ height: '240px', width: '234px' }}>
          <Slider navigation pagination sliderItems={post.images} slidesPerView={1} />
        </div>
        <div className={s.userInfoContainer}>
          <div className={s.userInfo}>
            <Avatar alt={'Profile avatar'} size={'small'} src={post.avatarOwner} />
            <Link href={`/public/users/${post.ownerId}`}>
              <Typography variant={'regular_text_16'}>{post.userName}</Typography>
            </Link>
          </div>
          <Typography variant={'regular_text_14'}>{post.description}</Typography>
        </div>
      </Card>
      {open && <Modal post={post} />}
    </div>
  )
}

const Modal = ({ post }: { post: Post }) => {
  return (
    <div style={{ border: '1px solid yellow' }}>
      <Slider sliderItems={post.images} />
    </div>
  )
}
