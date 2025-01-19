import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://inctagram.work',
  }),
  endpoints: builder => ({
    getEmailConfirmation: builder.mutation<void, string>({
      query: (code: string) => ({
        body: {
          confirmationCode: code,
        },
        method: 'POST',
        url: '/api/v1/auth/registration-confirmation',
      }),
    }),
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

export const {
  useGetEmailConfirmationMutation,
  useGetMeQuery,
  useGetSignInMutation,
  useGetSignUpMutation,
} = authApi
