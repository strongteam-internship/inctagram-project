import type { Metadata } from 'next'

import React from 'react'

import { Header } from '@/app/layouts/header/Header'

import '@/styles/index.scss'

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'en'} suppressHydrationWarning>
      <body>
        <Header isAuthenticated={false} />
        {children}
      </body>
    </html>
  )
}
