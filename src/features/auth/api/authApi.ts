import { baseApi } from '@/application/api/baseApi'
import { setAppStatus, setIsLoggedIn } from '@/application/model/app/appSlice'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCheckPasswordRecoveryCode: builder.mutation<void, { recoveryCode: string }>({
      query: ({ recoveryCode }: { recoveryCode: string }) => ({
        body: {
          recoveryCode,
        },
        method: 'POST',
        url: '/api/v1/auth/check-recovery-code',
      }),
    }),
    getConfirmPasswordRecovery: builder.mutation<
      void,
      { newPassword: string; recoveryCode: string }
    >({
      query: ({ newPassword, recoveryCode }: { newPassword: string; recoveryCode: string }) => ({
        body: {
          newPassword,
          recoveryCode,
        },
        method: 'POST',
        url: `/api/v1/auth/new-password`,
      }),
    }),
    getEmailConfirmation: builder.mutation<void, string>({
      query: (code: string) => ({
        body: {
          confirmationCode: code,
        },
        method: 'POST',
        url: '/api/v1/auth/registration-confirmation',
      }),
    }),
    getGoogleOAuth: builder.mutation<
      {
        accessToken: string
        email: string
      },
      {
        code: string
        redirectUrl: string
      }
    >({
      query: ({ code, redirectUrl }: { code: 'string'; redirectUrl: 'string' }) => ({
        body: {
          code,
          redirectUrl,
        },
        method: 'POST',
        url: '/api/v1/auth/google/login',
      }),
    }),
    getLogOut: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: `/api/v1/auth/logout`,
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
      async onQueryStarted({ email, password }, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled

          if (response.data.accessToken) {
            localStorage.setItem('accessToken', response.data.accessToken)
            dispatch(setIsLoggedIn(true))
          }
        } catch (error) {
          dispatch(setAppStatus('error'))
        }
      },
      query: ({ email, password }: { email: string; password: string }) => ({
        body: {
          email,
          password,
        },
        method: 'POST',
        url: `/api/v1/auth/login`,
      }),
    }),
    getSignUp: builder.mutation<
      void,
      {
        email: string
        password: string
        userName: string
      }
    >({
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
        } catch (error) {
          dispatch(setAppStatus('error'))
        }
      },
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
          baseUrl: 'https://strong-interns.top',
          email,
          password,
          userName,
        },
        method: 'POST',
        url: '/api/v1/auth/registration',
      }),
    }),
  }),
})

export const {
  useGetCheckPasswordRecoveryCodeMutation,
  useGetConfirmPasswordRecoveryMutation,
  useGetEmailConfirmationMutation,
  useGetGoogleOAuthMutation,
  useGetMeQuery,
  useGetPasswordRecoveryMutation,
  useGetResendEmailMutation,
  useGetSignInMutation,
  useGetSignUpMutation,
} = authApi
