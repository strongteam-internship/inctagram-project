import { Checkbox } from '@/shared/checkbox/Checkbox'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    checked: { control: 'boolean', defaultValue: false }, // Control for toggling checked/unchecked
    disabled: { control: 'boolean', defaultValue: false }, // Control for disabling the checkbox
    isRequired: { control: 'boolean', defaultValue: true }, // Control for toggling isRequired
  },
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

// Default State
export const Default: Story = {
  args: {
    children: 'Check-box',
  },
}

// Hover State
export const Hover: Story = {
  args: {
    children: 'Hover Check-box',
  },
  decorators: [
    Story => (
      <div className={'customCheckbox hover'}>
        <Story />
      </div>
    ),
  ],
}

// Active State
export const Active: Story = {
  args: {
    children: 'Active Check-box',
  },
  decorators: [
    Story => (
      <div className={'customCheckbox active'}>
        <Story />
      </div>
    ),
  ],
}

// Focus State
export const Focus: Story = {
  args: {
    children: 'Focus Check-box',
  },
  decorators: [
    Story => (
      <div className={'customCheckbox focus'}>
        <Story />
      </div>
    ),
  ],
}

// Disabled State
export const Disabled: Story = {
  argTypes: {
    checked: { control: 'boolean', defaultValue: false },
  },
  args: {
    children: 'Disabled Check-box',
    disabled: true,
  },
}
