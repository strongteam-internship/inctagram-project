'use client'

import { useGetAllPostsQuery } from '@/entities/post/api/publicPostApi'
import { PublicPostCard } from '@/entities/post/ui/publicPostCard/PublicPostCard'

import s from './PublicPostsList.module.scss'

export function PublicPostsList() {
  const { data } = useGetAllPostsQuery()

  return (
    <div className={s.container}>
      <ul className={s.postsList}>
        {data?.items.map(post => <PublicPostCard key={post.id} post={post} />)}
      </ul>
    </div>
  )
}
