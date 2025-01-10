import { ThunkDispatch } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://inctagram.work',
  }),
  endpoints: builder => ({
    getMe: builder.query<
      {
        email: string
        isBlocked: boolean
        userId: number
        userName: string
      },
      null
    >({
      query: () => `/api/v1/auth/me/`,
    }),
    getSignIn: builder.mutation<{ accessToken: string }, { email: string; password: string }>({
      query: ({ email, password }: { email: string; password: string }) => ({
        body: {
          email,
          password,
        },
        method: 'POST',
        url: `/api/v1/auth/login`,
      }),
      transformResponse(res: { accessToken: string }) {
        localStorage.setItem('token', res.accessToken)

        return res
      },
    }),
    getSignUp: builder.mutation<
      {
        error: 'string'
        messages: [
          {
            field: 'string'
            message: 'string'
          },
        ]
        statusCode: number
      },
      {
        baseUrl: string
        email: string
        password: string
        userName: string
      }
    >({
      query: ({
        email,
        password,
        userName,
      }: {
        email: string
        password: string
        userName: string
      }) => ({
        body: {
          email,
          password,
          userName,
        },
        method: 'POST',
        url: '/api/v1/auth/registration',
      }),
    }),
  }),
  reducerPath: 'authAPI',
})

export const { useGetMeQuery, useGetSignInMutation, useGetSignUpMutation } = authApi
