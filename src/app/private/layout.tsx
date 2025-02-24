'use client'
import React, { ReactNode, useState } from 'react'

import { AddPhotoModal } from '@/entities/user/ui/addPhotoModal/AddPhotoModal'
import { LogOutModal } from '@/features/auth/ui/logOutModal/logOutModal'
import { Navbar } from '@/widgets/navbar/Navbar'

import s from './layout.module.scss'
export default function PrivateLayout({ children }: { children: ReactNode }) {
  const [isOpenLogOutModal, setIsOpenLogOutModal] = useState<boolean>(false)
  const [isOpenAddPhotoModal, setIsOpenAddPhotoModal] = useState<boolean>(false)

  const handleLogOut = () => {
    setIsOpenLogOutModal(true)
  }
  const handleAddPhoto = () => {
    setIsOpenAddPhotoModal(true)
  }

  return (
    <div className={s.privateLayout}>
      <Navbar onAddPhotoAction={handleAddPhoto} onLogoutAction={handleLogOut} />
      <LogOutModal isOpen={isOpenLogOutModal} setIsOpenAction={setIsOpenLogOutModal} />
      <AddPhotoModal isOpen={isOpenAddPhotoModal} setIsOpenAction={setIsOpenAddPhotoModal} />
      {children}
    </div>
  )
}
