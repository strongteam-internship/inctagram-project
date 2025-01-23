import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'
import { deleteCookie, getCookie } from 'cookies-next/client'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://inctagram.work', // заменить на process.env.NEXT_PUBLIC_BASE_URL
  credentials: 'include',
  prepareHeaders: headers => {
    const accessToken = getCookie('accessToken')

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }

    return headers
  },
})

const mutex = new Mutex()

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          { method: 'POST', url: '/auth/refresh-token' },
          api,
          extraOptions
        )

        if (refreshResult?.meta?.response?.status === 204) {
          const newAccessToken = getCookie('accessToken')

          if (!newAccessToken) {
            deleteCookie('accessToken')
            window.location.href = '/login'

            return {
              error: {
                data: 'Токен не был обновлен. Пожалуйста, войдите снова.',
                status: 500,
              },
            }
          }

          result = await baseQuery(args, api, extraOptions)
        } else {
          deleteCookie('accessToken')
          window.location.href = '/login'

          return {
            error: {
              data: refreshResult.error?.data || 'Попробуйте снова авторизоваться.',
              status: refreshResult?.meta?.response?.status || 500,
            },
          }
        }
      } catch (error) {
        deleteCookie('accessToken')
        window.location.href = '/login'

        return {
          error: {
            data: 'Произошла ошибка. Вам необходимо повторно войти в систему.',
            status: 500,
          },
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
