import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/shared/typography/typography'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    children: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof Typography>

export const SimpleText: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'Large',
        'H1',
        'H2',
        'H3',
        'regular_text_16',
        'bold_text_16',
        'regular_text_14',
        'medium_text_14',
        'bold_text_14',
        'small_text_12',
        'semi_bold_small_text_12',
      ],
    },
  },
  args: {
    children: 'Hello world!',
    variant: 'Large',
  },
}
export const SimpleLink: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['regular_link', 'small_link'],
    },
    href: {
      control: 'text',
    },
  },
  args: {
    variant: 'regular_link',
    children: 'Click me!',
    href: '#',
  },
}
