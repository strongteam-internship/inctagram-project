import { baseQueryWithReauth } from '@/features/auth/api/baseQueryWithReauth'
import { queryNotificationHandler } from '@/features/auth/api/queryNotificationHandler'
import { createApi } from '@reduxjs/toolkit/query/react'
import { setCookie } from 'cookies-next/client'

export const authApi2 = createApi({
  baseQuery: baseQueryWithReauth,
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
      transformErrorResponse: response => {
        queryNotificationHandler(response)

        return response
      },
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
      transformErrorResponse: response => {
        queryNotificationHandler(response)

        return response
      },
      transformResponse(res: { accessToken: string }) {
        // Устанавливаем токен в cookies, вместо localStorage
        setCookie('accessToken', res.accessToken)

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
      transformErrorResponse: response => {
        queryNotificationHandler(response)

        return response
      },
    }),
  }),
  reducerPath: 'authAPI',
})

export const { useGetMeQuery, useGetSignInMutation, useGetSignUpMutation } = authApi2
