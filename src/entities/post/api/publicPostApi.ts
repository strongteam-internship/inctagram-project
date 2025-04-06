import * as url from 'node:url'

import { PostsResponse, PublicUserPostsResponse } from '@/entities/post/model/types'
import {
  BaseQueryArg,
  EndpointBuilder,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

export const publicPostApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: build => ({
    getAllPosts: build.query<PostsResponse, void>({
      providesTags: ['AllPosts'],
      query: () => ({
        url: `/api/v1/public-posts/all/?pageSize=4`,
      }),
    }),
    getPostByUserId: build.query<PublicUserPostsResponse, string>({
      providesTags: ['UserPosts'],
      query: userId => ({
        url: `/api/v1/public-posts/user/${userId}/`,
      }),
    }),
  }),

  reducerPath: 'publicPost',
  tagTypes: ['AllPosts', 'UserPosts'],
})

export const { useGetAllPostsQuery, useGetPostByUserIdQuery } = publicPostApi
