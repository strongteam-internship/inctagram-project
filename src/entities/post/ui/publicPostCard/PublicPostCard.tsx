import { Post } from '@/entities/post/model/types'
import { Avatar } from '@/shared/avatar/avatar'
import { Card } from '@/shared/card'
import { Slider } from '@/shared/slider/Slider'
import { Typography } from '@/shared/typography/typography'
import Link from 'next/link'

import s from './PublicPostCard.module.scss'

export function PublicPostCard({ post }: { post: Post }) {
  console.log(post)

  return (
    <Link href={`/public/users/${post.ownerId}?post=${post.id}`}>
      <Card className={s.cardContainer}>
        //TODO: Допилить картинки
        <div style={{ height: '240px', width: '234px' }}>
          <Slider navigation pagination sliderItems={post.images} />
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
    </Link>
  )
}
