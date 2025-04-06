import { useGetPostByUserIdQuery } from '@/entities/post/api/publicPostApi'
import { PublicUserPostCard } from '@/entities/post/ui/publicUserPostCard/PublicUserPostCard'

import s from './PublicUserPostsList.module.scss'
export function PublicUserPostsList({ id }: { id: string }) {
  const { data, isSuccess } = useGetPostByUserIdQuery(id)

  return (
    <div className={s.container}>
      {isSuccess &&
        data.items.map(post => (
          <PublicUserPostCard key={post.images[0].uploadId} src={post.images[0].url} />
        ))}
    </div>
  )
}
