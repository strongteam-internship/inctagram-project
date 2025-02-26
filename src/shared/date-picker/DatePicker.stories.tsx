import { useState } from 'react'

import { DatePicker } from '@/shared/date-picker/DatePicker'
import { Meta } from '@storybook/react'

export default {
  component: DatePicker,
  title: 'Components/DatePicker',
} as Meta<typeof DatePicker>

export const Default = {
  args: {
    disabled: false,
    label: 'Date',
    placeholder: 'Date select',
  },

  render(args: any) {
    const [startDate, setStartDate] = useState(null)

    return <DatePicker setStartDate={setStartDate} startDate={startDate} {...args} />
  },
}

export const DefaultWithErrors = {
  ...Default,
  args: {
    ...Default.args,
    error: true,
    errorMessage: 'Some error',
  },
}

export const DefaultDisabled = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const Range = {
  args: {
    placeholder: 'Date select',
  },

  render(args: any) {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    return (
      <DatePicker
        endDate={endDate}
        label={'Date'}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        startDate={startDate}
        {...args}
      />
    )
  },
}
