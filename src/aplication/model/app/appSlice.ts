import { PayloadAction, SliceCaseReducers, SliceSelectors, createSlice } from '@reduxjs/toolkit'

type AppStatuses = 'error' | 'idle' | 'loading'
type User = {
  firstName: string
  id: string
  lastName: string
} | null

type AppState = {
  appStatus: AppStatuses
  isLoggedIn: boolean
  user: User
}

const slice = createSlice<AppState, SliceCaseReducers<AppState>, string, SliceSelectors<AppState>>({
  initialState: {
    appStatus: 'idle',
    isLoggedIn: false,
    user: null,
  },
  name: 'app',
  reducers: {
    changeAppStatus: (state, action: PayloadAction<AppStatuses>) => {
      state.appStatus = action.payload
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  },
})

export const appSlice = slice.reducer
