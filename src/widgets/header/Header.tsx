'use client'

import { FC } from 'react'

import { useAppSelector } from '@/application/hooks/hooks'
import { Option, Select } from '@/shared/Select/Select'
import { Button } from '@/shared/button/button'
import FlagEn from '@/shared/input/icons/FlagEn'
import FlagRu from '@/shared/input/icons/FlagRu'
import NotificationIcon from '@/shared/input/icons/NotificationIcon'
import { Typography } from '@/shared/typography/typography'
import Link from 'next/link'

import styles from './Header.module.scss'

type HeaderProps = {
  notificationsCount?: number
}

export const Header: FC<HeaderProps> = ({ notificationsCount = 0 }) => {
  const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)

  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <Typography variant={'Large'}>Inctagram</Typography>
      </Link>
      <div className={styles.headerActions}>
        {isLoggedIn && (
          <div className={styles.notification}>
            <NotificationIcon />
            {notificationsCount && notificationsCount > 0 && (
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
        {!isLoggedIn && (
          <>
            <Button as={Link} className={styles.login} href={'/signin'} variant={'link'}>
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
