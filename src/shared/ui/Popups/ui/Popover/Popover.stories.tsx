import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Popover } from './Popover'

const meta = {
  title: 'shared/Popover',
  component: Popover
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <>
        <a>test</a>
        <a>test</a>
        <a>test</a>
        <a>test</a>
      </>
    )
  }
}
