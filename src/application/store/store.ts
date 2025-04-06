import { baseApi } from '@/application/api/baseApi'
import { appSlice } from '@/application/model/app/appSlice'
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
      .concat(authApi.middleware),
  reducer: {
    app: appSlice,
    [authApi.reducerPath]: authApi.reducer,
    [countApi.reducerPath]: countApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
