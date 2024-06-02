import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta = {
  title: 'Shared/Select',
  component: Select
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Укажите значения',
    options: [
      { value: '123', content: '123' },
      { value: '1234', content: '1234' },
      { value: '1235', content: '1235' }
    ]
  }
}
