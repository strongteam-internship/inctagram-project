import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Card } from '@/shared/card'
import CloseIcon from '@/shared/input/icons/CloseIcon'
import { modalAnimations } from '@/shared/modal/modalAnimations'
import { Typography } from '@/shared/typography/typography'
import * as ModalPrimitive from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'

import s from './Modal.module.scss'

export type ModalProps = {
  onClose?: () => void
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
  trigger?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Modal = forwardRef<ElementRef<'div'>, ModalProps>(
  ({ children, className, onClose, open = false, setOpen, title, trigger, ...restProps }, ref) => {
    const classNames = {
      closeButton: s.closeButton,
      content: s.content,
      header: s.header,
      modal: s.modal,
      modalCard: s.modalCard,
      overlay: s.overlay,
    }

    const handleClose = (isOpen: boolean) => {
      setOpen(isOpen)
      if (!isOpen && onClose) {
        onClose()
      }
    }

    return (
      <ModalPrimitive.Root onOpenChange={handleClose} open={open}>
        <ModalPrimitive.Trigger asChild>{trigger}</ModalPrimitive.Trigger>
        <AnimatePresence>
          {open && (
            <ModalPrimitive.Portal forceMount>
              <ModalPrimitive.Overlay asChild>
                <motion.div {...modalAnimations.overlay} className={classNames.overlay} />
              </ModalPrimitive.Overlay>
              <div className={classNames.modal} ref={ref} {...restProps}>
                <ModalPrimitive.Content asChild forceMount>
                  <motion.div {...modalAnimations.window}>
                    <Card className={classNames.modalCard}>
                      <header className={classNames.header}>
                        <Typography variant={'H1'}>{title}</Typography>
                        <ModalPrimitive.Close asChild className={classNames.closeButton}>
                          <CloseIcon />
                        </ModalPrimitive.Close>
                      </header>
                      <div className={classNames.content}>{children}</div>
                    </Card>
                  </motion.div>
                </ModalPrimitive.Content>
              </div>
            </ModalPrimitive.Portal>
          )}
        </AnimatePresence>
      </ModalPrimitive.Root>
    )
  }
)

Modal.displayName = 'Modal'
