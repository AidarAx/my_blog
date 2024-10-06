import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { PageLoader } from './PageLoader'

const meta = {
  title: 'Widgets/PageLoader',
  component: PageLoader
} satisfies Meta<typeof PageLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
