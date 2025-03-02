'use client'
import React from 'react'

import { AppProvider } from '@/application/services/appProvider/appProvider'

import '@/styles/index.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'en'} suppressHydrationWarning>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
