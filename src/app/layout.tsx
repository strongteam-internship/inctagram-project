'use client'
import React from 'react'

import { useAppSelector } from '@/application/hooks/hooks'
import { AppProvider } from '@/application/services/appProvider/appProvider'
import { Header } from '@/widgets/header/Header'

import '@/styles/index.scss'

import styles from './main.module.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)

  return (
    <html lang={'en'} suppressHydrationWarning>
      <body>
        <div className={styles.main}>
          <Header isAuthenticated={isLoggedIn} notificationsCount={1} />
          <AppProvider>{children}</AppProvider>
        </div>
      </body>
    </html>
  )
}
