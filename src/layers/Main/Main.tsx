import { ReactNode } from 'react'

import { useAppSelector } from '@/application/hooks/hooks'
import { Header } from '@/widgets/header/Header'

import s from './Main.module.scss'

export function Main({ children }: { children: ReactNode }) {
  const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)

  return (
    <main className={s.main}>
      <Header isAuthenticated={isLoggedIn} notificationsCount={1} />
      <>{children}</>
    </main>
  )
}
