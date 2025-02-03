'use client'
import React from 'react'

import { AppProvider } from '@/application/services/appProvider/appProvider'
import { Header } from '@/widgets/header/Header'

import '@/styles/index.scss'

import styles from './main.module.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'en'} suppressHydrationWarning>
      <body>
        <div className={styles.main}>
          <Header isAuthenticated notificationsCount={1} />
          <AppProvider>{children}</AppProvider>
        </div>
      </body>
    </html>
  )
}
