import { appSlice } from '@/application/model/app/appSlice'
import { userApi } from '@/entities/user/api/userApi'
import { authApi } from '@/features/auth/api/authApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware).concat(userApi.middleware),
  reducer: {
    app: appSlice,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
