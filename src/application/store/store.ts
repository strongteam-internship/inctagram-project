import { baseApi } from '@/application/api/baseApi'
import { appSlice } from '@/application/model/app/appSlice'
import { publicPostApi } from '@/entities/post/api/publicPostApi'
import { userApi } from '@/entities/user/api/userApi'
import { authApi } from '@/features/auth/api/authApi'
import { countApi } from '@/widgets/totalCountOfUsers/api/countApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(countApi.middleware)
      .concat(userApi.middleware)
      .concat(authApi.middleware)
      .concat(publicPostApi.middleware),
  reducer: {
    app: appSlice,
    [authApi.reducerPath]: authApi.reducer,
    [countApi.reducerPath]: countApi.reducer,
    [publicPostApi.reducerPath]: publicPostApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
