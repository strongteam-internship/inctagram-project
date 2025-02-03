import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
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
      void
    >({
      query: () => `/api/v1/auth/me/`,
    }),
    getPasswordRecovery: builder.mutation<
      {
        error: string
        messages: [
          {
            field: string
            message: string
          },
        ]
        statusCode: number
      },
      { baseUrl: string; email: string; recaptcha: string }
    >({
      query: ({
        baseUrl,
        email,
        recaptcha,
      }: {
        baseUrl: string
        email: string
        recaptcha: string
      }) => ({
        body: {
          baseUrl,
          email,
          recaptcha,
        },
        method: 'POST',
        url: `/api/v1/auth/password-recovery`,
      }),
    }),
    getResendEmail: builder.mutation<void, string>({
      query: (email: string) => ({
        body: {
          baseUrl: 'https://strong-interns.top',
          email,
        },
        method: 'POST',
        url: '/api/v1/auth/registration-email-resending',
      }),
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
  useGetPasswordRecoveryMutation,
  useGetResendEmailMutation,
  useGetSignInMutation,
  useGetSignUpMutation,
} = authApi
