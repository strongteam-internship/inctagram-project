'use client'

import React from 'react'

import { Option, Select } from '@/shared/Select/Select'
import { Button } from '@/shared/button/button'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss'

type HeaderProps = {
  isAuthenticated: boolean
  notificationsCount?: number
}

export const Header: React.FC<HeaderProps> = ({ isAuthenticated, notificationsCount = 0 }) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Inctagram</h2>
      <div className={styles.div}>
        {isAuthenticated && (
          <div className={styles.notifications}>
            <Image alt={'Notifications'} height={24} src={'/icons/bell.svg'} width={24} />
            {notificationsCount > 0 && <span className={styles.badge}>{notificationsCount}</span>}
          </div>
        )}
        <div className={styles.language}>
          <Select>
            <Option key={'1'} value={'en'}>
              <div>
                <img alt={''} src={''} />
                <span>English</span>
              </div>
            </Option>
            <Option key={'2'} value={'ru'}>
              <div>
                <img alt={''} src={''} />
                <span>Русский</span>
              </div>
            </Option>
          </Select>
        </div>
        {!isAuthenticated && (
          <>
            <Link className={styles.link} href={'/login'}>
              Log in
            </Link>
            <Link href={'/signup'}>
              <Button variant={'primary'}>Sign up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  )
}
