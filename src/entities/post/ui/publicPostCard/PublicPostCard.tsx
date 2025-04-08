import { Post } from '@/entities/post/model/types'
import { Avatar } from '@/shared/avatar/avatar'
import { Card } from '@/shared/card'
import { Slider } from '@/shared/slider/Slider'
import { Typography } from '@/shared/typography/typography'
import Image from 'next/image'
import Link from 'next/link'

import s from './PublicPostCard.module.scss'

export function PublicPostCard({ post }: { post: Post }) {
  console.log(post)

  return (
    <Card className={s.cardContainer}>
      //TODO: Допилить картинки
      <Slider height={240} sliderItems={post.images} width={240} />
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
  )
}
