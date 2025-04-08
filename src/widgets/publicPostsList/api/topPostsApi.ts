import { PostsResponse } from '@/entities/post/model/types'

export async function getTopPublicPosts(): Promise<PostsResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/public-posts/all?pageSize=4`,
    {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    }
  )

  return response.json()
}
