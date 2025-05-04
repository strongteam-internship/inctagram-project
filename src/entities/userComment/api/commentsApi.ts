import { PaginatedCommentsResponseType } from '@/entities/userComment/model/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: build => ({
    getCommentsByPostId: build.query<
      PaginatedCommentsResponseType,
      {
        pageNumber?: number
        pageSize?: number
        postId: number
        sortBy?: string
        sortDirection?: 'asc' | 'desc'
      }
    >({
      query: ({
        pageNumber = 1,
        pageSize = 10,
        postId,
        sortBy = 'createdAt',
        sortDirection = 'desc',
      }) => ({
        params: {
          pageNumber,
          pageSize,
          sortBy,
          sortDirection,
        },
        url: `/api/v1/public-posts/${postId}/comments`,
      }),
    }),
  }),
  reducerPath: 'postComments',
  // добавить таги
})

export const { useGetCommentsByPostIdQuery } = commentsApi
