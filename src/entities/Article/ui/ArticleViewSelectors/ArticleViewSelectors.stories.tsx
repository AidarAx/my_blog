import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ArticleView } from '@/entities/Article'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { ArticleViewSelectors } from './ArticleViewSelectors'

const meta = {
  title: 'entities/ArticleViewSelectors',
  component: ArticleViewSelectors
} satisfies Meta<typeof ArticleViewSelectors>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    view: ArticleView.SMALL
  }
}

export const Dark: Story = {
  args: {
    view: ArticleView.BIG
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
