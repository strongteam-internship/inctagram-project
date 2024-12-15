import { Option, Select } from '@/shared/Select/Select'
import { Meta, StoryObj } from '@storybook/react'

// Стандарт
const meta: Meta<typeof Select> = {
  argTypes: {
    border: { control: 'color' },
    color: { control: 'color' },
  },
  args: {
    children: [
      <Option key={'1'} value={'Selected-box 1'}>
        Selected-box 1
      </Option>,
      <Option key={'2'} value={'Selected-box 2'}>
        Selected-box 2
      </Option>,
      <Option key={'3'} value={'Selected-box 3'}>
        Selected-box 3
      </Option>,
    ],
  },
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>
//

export const Default: Story = {
  args: {},
}

export const Active: Story = {
  args: { color: 'var(--color-light-100)' },
}

export const Hover: Story = {
  args: { color: 'var(--color-accent-500)' },
}

export const Focus: Story = {
  args: { border: '2px solid var(--color-accent-500)' },
}

export const Disabled: Story = {
  args: { disabled: true },
}
