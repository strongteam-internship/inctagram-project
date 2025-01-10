import React, { CSSProperties, useState } from 'react'

import { Button } from '@/shared/button/button'
import { Modal } from '@/shared/modal/Modal'
import { Typography } from '@/shared/typography/typography'
import { Meta } from '@storybook/react'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

export const ModalWindow = {
  render() {
    const [open, setOpen] = useState(false)

    const onClose = () => {
      setOpen(false)
    }

    const onButtonClickHandler = () => {
      setOpen(false)
    }

    const text: CSSProperties = {
      display: 'flex',
      overflowWrap: 'break-word',
      whiteSpace: 'normal',
    }

    const buttons: CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      gap: '8px',
      justifyContent: 'space-between',
    }

    return (
      <>
        <Modal open={open} setOpen={setOpen} title={'Title'} trigger={<Button>Click me</Button>}>
          <div style={text}>
            <Typography style={{ maxWidth: '100%' }} variant={'regular_text_16'}>
              Are you sure you want to delete it?
            </Typography>
          </div>
          <div style={buttons}>
            <Button onClick={onClose} type={'button'} variant={'outline'}>
              Cancel
            </Button>
            <Button onClick={onButtonClickHandler} type={'button'} variant={'primary'}>
              OK
            </Button>
          </div>
        </Modal>
      </>
    )
  },
}
