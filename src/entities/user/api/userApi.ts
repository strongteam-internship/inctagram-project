import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
type User = {
  aboutMe: string
  avatars: UserAvatar[]
  city: string
  country: string
  createdAt: string
  dateOfBirth: string
  firstName: string
  id: number
  lastName: string
  region: string
  userName: string
}
type UserAvatar = {
  createdAt: string
  fileSize: number
  height: number
  url: string
  width: number
}

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://inctagram.work',
    prepareHeaders: headers => {
      const token = localStorage.getItem('token')

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
    },
  }),
  endpoints: builder => ({
    getProfile: builder.query<User, void>({
      query: () => '/api/v1/users/profile',
    }),
  }),
})

export const { useGetProfileQuery } = userApi
