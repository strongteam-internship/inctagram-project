'use client'
import React from 'react'

import { AppProvider } from '@/application/services/appProvider/appProvider'
import { Header } from '@/widgets/header/Header'
import { Navbar } from '@/widgets/navbar/Navbar'

import '@/styles/index.scss'

import s from './main.module.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isAuthenticated = true

  return (
    <html lang={'en'} suppressHydrationWarning>
      <body>
        <div className={s.main}>
          <Header isAuthenticated={isAuthenticated} notificationsCount={1} />
          <div className={s.layoutContent}>
            {isAuthenticated && <Navbar />}
            <div className={s.contentArea}>
              <AppProvider>{children}</AppProvider>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
