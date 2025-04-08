import { Post } from '@/entities/post/model/types'
import { Avatar } from '@/shared/avatar/avatar'
import { Card } from '@/shared/card'
import { Typography } from '@/shared/typography/typography'
import Image from 'next/image'
import Link from 'next/link'

import s from './PublicPostCard.module.scss'

export function PublicPostCard({ post }: { post: Post }) {
  return (
    <Card className={s.cardContainer}>
      <Image alt={'Public Post'} height={240} src={post.images[0].url} width={240} />
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
