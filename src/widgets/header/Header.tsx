'use client'

import { FC } from 'react'

import { Option, Select } from '@/shared/Select/Select'
import { Button } from '@/shared/button/button'
import FlagEn from '@/shared/input/icons/FlagEn'
import FlagRu from '@/shared/input/icons/FlagRu'
import NotificationIcon from '@/shared/input/icons/NotificationIcon'
import { Typography } from '@/shared/typography/typography'
import Link from 'next/link'

import styles from './Header.module.scss'

type HeaderProps = {
  isAuthenticated: boolean
  notificationsCount?: number
}

export const Header: FC<HeaderProps> = ({ isAuthenticated, notificationsCount = 0 }) => {
  return (
    <header className={styles.header}>
      <Typography variant={'Large'}>Inctagram</Typography>
      <div className={styles.headerActions}>
        {isAuthenticated && (
          <div className={styles.notification}>
            <NotificationIcon />
            {notificationsCount > 0 && (
              <div className={styles.count}>
                {notificationsCount > 9 ? '9+' : notificationsCount}
              </div>
            )}
          </div>
        )}
        <div>
          <Select selectedItem={'ru'}>
            <Option key={'1'} value={'en'}>
              <div className={styles.option}>
                <FlagEn />
                <span>English</span>
              </div>
            </Option>
            <Option key={'2'} value={'ru'}>
              <div className={styles.option}>
                <FlagRu />
                <span>Русский</span>
              </div>
            </Option>
          </Select>
        </div>
        {!isAuthenticated && (
          <>
            <Button as={Link} className={styles.login} href={'/login'} variant={'link'}>
              Log in
            </Button>
            <Button as={Link} className={styles.signup} href={'/signup'}>
              Sign up
            </Button>
          </>
        )}
      </div>
    </header>
  )
}
