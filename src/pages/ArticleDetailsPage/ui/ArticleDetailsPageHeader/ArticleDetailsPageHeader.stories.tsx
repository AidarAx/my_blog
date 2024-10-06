import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

const meta = {
  title: 'pages/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader
} satisfies Meta<typeof ArticleDetailsPageHeader>

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
