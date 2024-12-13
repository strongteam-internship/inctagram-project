import { appSlice } from '@/application/model/app/appSlice'
import { authApi } from '@/features/auth/api/authApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
  reducer: {
    app: appSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
