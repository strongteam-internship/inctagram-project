export type PublicUserResponse = {
  aboutMe: string
  avatars: {
    createdAt: Date
    fileSize: number
    height: number
    url: string
    width: number
  }[]
  hasPaymentSubscription: boolean
  id: number
  userMetadata: {
    followers: number
    following: number
    publications: number
  }
  userName: string
}
