import React from 'react'

import { Meta } from '@storybook/react'

import { CheckEmail } from './CheckEmail'

const meta = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Sign Up/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta

export const Default = {
  render() {
    return <CheckEmail email={'test@example.com'} />
  },
}
