'use client'
import React, { useEffect } from 'react'

import { useAppSelector } from '@/application/hooks/hooks'
import { AuthGuard } from '@/application/services/AuthGuard/AuthGuard'
import { AppProvider } from '@/application/services/appProvider/appProvider'
import { Header } from '@/widgets/header/Header'
import { useRouter } from 'next/navigation'

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
          <AppProvider>
            <AuthGuard>{children}</AuthGuard>
          </AppProvider>
        </div>
      </body>
    </html>
  )
}
