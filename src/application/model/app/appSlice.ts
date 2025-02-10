import { PayloadAction, SliceCaseReducers, SliceSelectors, createSlice } from '@reduxjs/toolkit'

type AppStatuses = 'error' | 'idle' | 'loading' | 'success'
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
    setAppStatus: (state, action: PayloadAction<AppStatuses>) => {
      state.appStatus = action.payload
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
  },
})

export const appSlice = slice.reducer

export const { setAppStatus, setIsLoggedIn } = slice.actions
