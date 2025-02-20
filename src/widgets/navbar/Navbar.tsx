'use client'

import { ReactNode, useState } from 'react'

import BookmarkOutline from '@/assets/svg/icons/components/BookmarkOutline'
import HomeOutline from '@/assets/svg/icons/components/HomeOutline'
import LogOutOutline from '@/assets/svg/icons/components/LogOutOutline'
import MessageCircleOutline from '@/assets/svg/icons/components/MessageCircleOutline'
import PersonOutline from '@/assets/svg/icons/components/PersonOutline'
import PlusSquareOutline from '@/assets/svg/icons/components/PlusSquareOutline'
import SearchOutline from '@/assets/svg/icons/components/SearchOutline'
import TrendingUpOutline from '@/assets/svg/icons/components/TrendingUpOutline'
import { Button } from '@/shared/button/button'
import { Modal } from '@/shared/modal/Modal'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import s from './Navbar.module.scss'

type NavbarItem = {
  href?: string
  icon: ReactNode
  label: string
  onClick?: () => void
  type: 'button' | 'link'
}

export const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)
  const pathname = usePathname()
  const navbarItems: NavbarItem[] = [
    { href: '/private/home', icon: <HomeOutline />, label: 'Home', type: 'link' },
    {
      icon: <PlusSquareOutline />,
      label: 'Create',
      onClick: () => setOpenModal(true),
      type: 'button',
    },
    { href: '/private/profile', icon: <PersonOutline />, label: 'My Profile', type: 'link' },
    {
      href: '/private/messenger',
      icon: <MessageCircleOutline />,
      label: 'Messenger',
      type: 'link',
    },
    { href: '/private/search', icon: <SearchOutline />, label: 'Search', type: 'link' },
    { href: '/private/statistics', icon: <TrendingUpOutline />, label: 'Statistics', type: 'link' },
    { href: '/private/favorites', icon: <BookmarkOutline />, label: 'Favorites', type: 'link' },
    { href: '/signup', icon: <LogOutOutline />, label: 'Log Out', type: 'link' },
  ]

  return (
    <>
      <nav className={s.sidebar}>
        <ul className={s.sidebarMenu}>
          {navbarItems.map(({ href, icon, label, onClick, type }) => (
            <li className={`${s.sidebarMenuItem} ${pathname === href ? s.active : ''}`} key={label}>
              {type === 'link' ? (
                <Button
                  aria-label={label}
                  as={Link}
                  className={s.button}
                  href={href}
                  variant={'link'}
                >
                  {icon}
                  <span>{label}</span>
                </Button>
              ) : (
                <Button
                  aria-label={label}
                  as={'button'}
                  className={s.button}
                  onClick={onClick}
                  variant={'link'}
                >
                  {icon}
                  <span>{label}</span>
                </Button>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <Modal open={openModal} setOpen={setOpenModal} title={'Add Photo'}>
        <div className={s.modalContent}>
          <Button onClick={() => {}} variant={'primary'}>
            Select from Computer
          </Button>
          <Button onClick={() => {}} variant={'secondary'}>
            Open Draft
          </Button>
        </div>
      </Modal>
    </>
  )
}
