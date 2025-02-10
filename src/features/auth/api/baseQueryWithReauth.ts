import { setAppStatus, setIsLoggedIn } from '@/application/model/app/appSlice'
import { showToastError } from '@/features/auth/api/showToastError'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'
import { deleteCookie, getCookie, setCookie } from 'cookies-next/client'

type RefreshTokenResponse = {
  accessToken: string
}

type RefreshResult = {
  data?: RefreshTokenResponse
  error?: FetchBaseQueryError
}

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  credentials: 'include',
  prepareHeaders: headers => {
    const accessToken = getCookie('accessToken')

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }

    return headers
  },
}) as BaseQueryFn<FetchArgs | string, RefreshTokenResponse, FetchBaseQueryError>

const mutex = new Mutex()

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  RefreshTokenResponse,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      let refreshResult: RefreshResult = { data: undefined, error: undefined }

      try {
        api.dispatch(setAppStatus('loading')) // 1. Устанавливаем статус загрузки
        refreshResult = await baseQuery(
          { method: 'POST', url: '/api/v1/auth/update-tokens/' },
          api,
          extraOptions
        )

        if (refreshResult.data?.accessToken) {
          setCookie('accessToken', refreshResult.data.accessToken) // 2. Сохраняем accessToken
          result = await baseQuery(args, api, extraOptions) // 3. Повторяем запрос

          if (!result.error) {
            api.dispatch(setIsLoggedIn(true)) // 4. Только если запрос успешен, обновляем статус isLoggedIn
            api.dispatch(setAppStatus('success')) // 5. Устанавливаем статус успеха
          } else {
            api.dispatch(setAppStatus('error')) // Если повторный запрос провалился, статус = "error"
          }
        } else {
          api.dispatch(setAppStatus('error'))
          showToastError('Ошибка авторизации. Пожалуйста, войдите снова.')
          setTimeout(() => {
            deleteCookie('accessToken')
            api.dispatch(setIsLoggedIn(false))
          }, 2000)
          // window.location.href = '/auth/signin' - управление редиректами будет на уровне маршрутов или компонент с помощью useRouter
        }
      } catch (error) {
        api.dispatch(setIsLoggedIn(false))
        showToastError('Ошибка повторной авторизации. Пожалуйста, войдите снова.')
      } finally {
        release()
        api.dispatch(setAppStatus(refreshResult.data?.accessToken ? 'idle' : 'error')) // Проверяем результат и устанавливаем статус
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
