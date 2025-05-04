import { Post } from '@/entities/post/model/types'

export async function getPostById(postId: number): Promise<Post> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/public-posts/${postId}`)

  return response.json()
}
