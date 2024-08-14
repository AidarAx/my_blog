import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    trigger: 'open',
    items: [
      {
        content: 'first'
      },
      {
        content: 'first'
      },
      {
        content: 'first'
      },
      {
        content: 'first'
      }
    ]
  }
}
