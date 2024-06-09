import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'Shared/Skeleton',
  component: Skeleton
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    width: '100%',
    height: 200
  }
}

export const Circle: Story = {
  args: {
    border: '50%',
    width: 200,
    height: 200
  }
}

export const PrimaryDark: Story = {
  args: {
    width: '100%',
    height: 200
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 200,
    height: 200
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
