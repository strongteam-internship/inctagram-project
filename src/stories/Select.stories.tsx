import { Select } from '@/shared/Select/Select'
import { type Meta, type StoryFn } from '@storybook/react'
import React from 'react'

export default {
  title: 'shared/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: { control: 'color' },
    border: { control: 'color' }
  },
  args: {
    options: ['Selected-box 1', 'Selected-box 2', 'Selected-box 3'],
  },
} as Meta<typeof Select>

const Template: StoryFn<typeof Select> = args => <Select {...args} />

export const Default = Template.bind({})
Default.args = {}
export const Active = Template.bind({})
Active.args = {color: 'var(--color-light-100)'}
export const Hover = Template.bind({})
Hover.args = {color: 'var(--color-accent-500)'}
export const Focus = Template.bind({})
Focus.args = {border: '2px solid var(--color-accent-500)'}
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
