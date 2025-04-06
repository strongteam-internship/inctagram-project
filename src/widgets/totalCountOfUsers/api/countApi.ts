import { baseApi } from '@/application/api/baseApi'
import { EndpointBuilder, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const countApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: build => ({
    getTotalCountOfUsers: build.query<{ totalCount: string[] }, void>({
      query: () => ({
        url: '/api/v1/public-user',
      }),
      transformResponse: (response: { totalCount: string[] }) => {
        return {
          ...response,
          totalCount: ['0', '0', ...String(response.totalCount).split('')],
        }
      },
    }),
  }),
  reducerPath: 'countApi',
})

export const { useGetTotalCountOfUsersQuery } = countApi
