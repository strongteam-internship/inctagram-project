'use client'

import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { AuthGuard } from '@/application/services/AuthGuard/AuthGuard'
import { store } from '@/application/store/store'
import { Header } from '@/widgets/header/Header'

type Props = {
  children: ReactNode
}

export function AppProvider({ children }: Props) {
  return (
    <Provider store={store}>
      <>
        <Header notificationsCount={1} />
        <AuthGuard>{children}</AuthGuard>
      </>
    </Provider>
  )
}
