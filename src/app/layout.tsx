import React from 'react'

import { AppProvider } from '@/application/services/appProvider/appProvider'
import { RootLayoutContainer } from '@/widgets/layouts/RootLayoutContainer'

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
          <RootLayoutContainer>{children}</RootLayoutContainer>
        </AppProvider>
      </body>
    </html>
  )
}
