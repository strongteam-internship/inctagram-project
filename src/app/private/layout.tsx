'use client'
import React, { ReactNode } from 'react'

import { Navbar } from '@/widgets/navbar/Navbar'

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
