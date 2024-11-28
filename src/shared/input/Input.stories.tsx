import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Input } from '@/shared/input/Input'

const meta = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: () => {
    const [state, setState] = useState('')

    return (
      <Input
        label={'Input'}
        name={'email'}
        onChange={e => setState(e.target.value)}
        placeholder={'Placeholder'}
        value={state}
      />
    )
  },
}

export const Password = {
  render: () => {
    const [state, setState] = useState('')

    return (
      <Input
        label={'Input'}
        onChange={e => setState(e.target.value)}
        placeholder={'Placeholder'}
        value={state}
        variant={'password'}
      />
    )
  },
}

export const Search = {
  render: () => {
    const [state, setState] = useState('')

    return (
      <Input
        label={'Input search'}
        onChange={e => setState(e.target.value)}
        onClearClick={() => {
          setState('')
        }}
        placeholder={'Input search'}
        value={state}
        variant={'search'}
      />
    )
  },
}

export const InputWithError: Story = {
  args: {
    errorText: 'Error!',
    placeholder: 'Error',
  },
}

export const InputWithoutLabel: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'text',
  },
}

export const DisabledPassword: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Placeholder',
    variant: 'password',
  },
}

export const DisabledSearch: Story = {
  args: {
    disabled: true,
    label: 'Input search',
    placeholder: 'Placeholder',
    variant: 'search',
  },
}
