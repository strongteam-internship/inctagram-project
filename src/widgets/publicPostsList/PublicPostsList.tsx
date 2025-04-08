import { PublicPostCard } from '@/entities/post/ui/publicPostCard/PublicPostCard'
import { getTopPublicPosts } from '@/widgets/publicPostsList/api/topPostsApi'

import s from './PublicPostsList.module.scss'

export async function PublicPostsList() {
  const data = await getTopPublicPosts()

  return (
    <div className={s.container}>
      <ul className={s.postsList}>
        {data?.items.map(post => <PublicPostCard key={post.id} post={post} />)}
      </ul>
    </div>
  )
}
