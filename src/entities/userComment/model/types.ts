export type PaginatedCommentsResponseType = {
  items: CommentType[]
  page: number
  pageSize: number
  pagesCount: number
  totalCount: number
}

export type CommentType = {
  answerCount: number
  content: string
  createdAt: string
  from: {
    // avatars: [{}]
    avatars: any
    id: number
    username: string
  }
  id: number
  isLiked: boolean
  likeCount: number
  postId: number
}
