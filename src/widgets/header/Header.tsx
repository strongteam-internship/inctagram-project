'use client'

import { FC } from 'react'

import { Option, Select } from '@/shared/Select/Select'
import { Button } from '@/shared/button/button'
import FlagEn from '@/shared/input/icons/FlagEn'
import FlagRu from '@/shared/input/icons/FlagRu'
import NotificationIcon from '@/shared/input/icons/NotificationIcon'
import Link from 'next/link'

import styles from './Header.module.scss'

type HeaderProps = {
  isAuthenticated: boolean
  notificationsCount?: number
}

export const Header: FC<HeaderProps> = ({ isAuthenticated, notificationsCount = 0 }) => {
  return (
    <header className={styles.header}>
      <h2>Instagram</h2>
      <div>
        {isAuthenticated && (
          <div>
            <NotificationIcon />
            {notificationsCount > 0 && <span>{notificationsCount}</span>}
          </div>
        )}
        <div>
          <Select>
            <Option key={'1'} value={'en'}>
              <div>
                <FlagEn />
                <span>English</span>
              </div>
            </Option>
            <Option key={'2'} value={'ru'}>
              <div>
                <FlagRu />
                <span>Русский</span>
              </div>
            </Option>
          </Select>
        </div>
        {!isAuthenticated && (
          <>
            <Link href={'/login'}>Log in</Link>
            <Link href={'/signup'}>
              <Button variant={'primary'}>Sign up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  )
}
