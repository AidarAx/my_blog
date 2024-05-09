import type { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from './PageLoader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'Widgets/PageLoader',
  component: PageLoader
} satisfies Meta<typeof PageLoader>

export default meta
type Story = StoryObj<typeof meta>

export const PageLoaderLight: Story = {
  args: {}
}

export const PageLoaderDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
