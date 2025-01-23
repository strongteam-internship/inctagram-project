'use client'
import React from 'react'

import { AppProvider } from '@/application/services/appProvider/appProvider'
import { Main } from '@/layers/Main/Main'

import '@/styles/index.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'en'} suppressHydrationWarning>
      <body>
        <AppProvider>
          <Main>{children}</Main>
        </AppProvider>
      </body>
    </html>
  )
}
