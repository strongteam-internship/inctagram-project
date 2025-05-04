import { PublicUserPage } from '@/layers/public/userPage/PublicUserPage'
import { getPostById } from '@/widgets/publicPostModal/api/getPostById'

export default async function UserPage({ searchParams}: {
  searchParams: { post: string }
}) {

  const { post } = await searchParams
  const postData = await getPostById(+post)

  return <PublicUserPage postData = {postData} />
}