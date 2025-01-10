'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/application/store/store'

type Props = {
  children: ReactNode
}

export function AppProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>
}
