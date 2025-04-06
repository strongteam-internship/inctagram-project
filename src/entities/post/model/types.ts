export type PublicUserPostsResponse = {
  items: {
    avatarOwner: string
    avatarWhoLikes: boolean
    createdAt: Date
    description: string
    id: number
    images: {
      createdAt: Date
      fileSize: number
      height: number
      uploadId: string
      url: string
      width: number
    }[]
    isLiked: boolean
    likesCount: number
    location: string
    owner: {
      firstName: string
      lastName: string
    }
    ownerId: number
    updatedAt: Date
    userName: string
  }[]
  pageSize: number
  totalCount: number
}

export type PostsResponse = {
  items: Post[]
  pageSize: number
  totalCount: number
  totalUsers: number
}
export type Post = {
  avatarOwner: string
  avatarWhoLikes: string[]
  createdAt: Date
  description: string
  id: number
  images: {
    createdAt: Date
    fileSize: number
    height: number
    uploadId: string
    url: string
    width: number
  }[]
  isLiked: boolean
  likesCount: number
  location: null | string
  owner: {
    firstName: string
    lastName: string
  }
  ownerId: number
  updatedAt: Date
  userName: string
}
