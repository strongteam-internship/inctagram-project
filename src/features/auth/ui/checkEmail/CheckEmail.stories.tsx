import React, { useState } from 'react'

import { Button } from '@/shared/button/button'
import { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from './CheckEmail'

const meta = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Sign Up/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta

export const Default: StoryObj<typeof CheckEmail> = {
  render: () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
      <CheckEmail
        email={'test@example.com'}
        onClose={() => console.log('Modal closed')}
        open={open}
        setOpen={setOpen}
        trigger={
          <Button
            onClick={() => {
              setOpen(true)
            }}
            variant={'primary'}
          >
            Click me
          </Button>
        }
      />
    )
  },
}
