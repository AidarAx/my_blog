import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Tabs } from './Tabs'

const meta = {
  title: 'shared/Tabs',
  component: Tabs
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    tabs: [
      {
        value: 'tab 1',
        content: 'tab 1'
      },
      {
        value: 'tab 2',
        content: 'tab 2'
      },
      {
        value: 'tab 3',
        content: 'tab 3'
      }
    ],
    value: 'tab 2',
    onTabClick: () => null
  }
}

export const Dark: Story = {
  args: {
    tabs: [
      {
        value: 'tab 1',
        content: 'tab 1'
      },
      {
        value: 'tab 1',
        content: 'tab 1'
      },
      {
        value: 'tab 1',
        content: 'tab 1'
      }
    ],
    value: 'tab 2',
    onTabClick: () => null
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
