import { baseApi } from '@/features/auth/api/baseApi'
import { queryNotificationHandler } from '@/features/auth/api/queryNotificationHandler'
import { setCookie } from 'cookies-next/client'

export const authApi2 = baseApi.injectEndpoints({
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
      providesTags: ['Me'],
      query: () => `/api/v1/auth/me/`,
      transformErrorResponse: response => {
        queryNotificationHandler(response)

        return response
      },
    }),
    getSignIn: builder.mutation<{ accessToken: string }, { email: string; password: string }>({
      invalidatesTags: ['Me'],
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
        email: string
        password: string
        userName: string
      }
    >({
      invalidatesTags: ['Me'],
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
})

export const { useGetMeQuery, useGetSignInMutation, useGetSignUpMutation } = authApi2
