import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://inctagram.work' }),
  endpoints: builder => ({
    getLogin: builder.mutation({
      query: ({ email, password }: { email: string; password: string }) => ({
        body: {
          email,
          password,
        },
        method: 'POST',
        url: `/api/v1/auth/login`,
      }),
    }),
    getMe: builder.query({
      query: () => `/api/v1/auth/me/`,
    }),
  }),
  reducerPath: 'authAPI',
})

export const { useGetLoginMutation, useGetMeQuery } = authApi
