import { FC } from 'react'

import { Button } from '@/shared/button/button'
import { Modal } from '@/shared/modal'

import s from '@/widgets/navbar/Navbar.module.scss'

type Props = {
  isOpen: boolean
  setIsOpenAction: (toggle: boolean) => void
}
export const AddPhotoModal: FC<Props> = ({ isOpen, setIsOpenAction }) => {
  return (
    <Modal open={isOpen} setOpen={setIsOpenAction} title={'Add Photo'}>
      <div className={s.modalContent}>
        <Button onClick={() => {}} variant={'primary'}>
          Select from Computer
        </Button>
        <Button onClick={() => {}} variant={'secondary'}>
          Open Draft
        </Button>
      </div>
    </Modal>
  )
}
