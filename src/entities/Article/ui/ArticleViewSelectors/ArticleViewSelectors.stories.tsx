import type { Meta, StoryObj } from '@storybook/react'
import { ArticleViewSelectors } from './ArticleViewSelectors'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: '.../ArticleViewSelectors',
  component: ArticleViewSelectors
} satisfies Meta<typeof ArticleViewSelectors>

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
