'use client'
import React from 'react'

import { useAppSelector } from '@/application/hooks/hooks'
import { Header } from '@/widgets/header/Header'
import { Navbar } from '@/widgets/navbar/Navbar'
import clsx from 'clsx'

import s from '@/widgets/layouts/RootLayoutContainer.module.scss'

export const RootLayoutContainer = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)

  return (
    <div className={s.main}>
      <Header notificationsCount={1} />
      <div className={clsx(s.layoutContent, { [s.authenticated]: isLoggedIn })}>
        {isLoggedIn && <Navbar />}
        <div className={s.contentArea}>{children}</div>
      </div>
    </div>
  )
}
