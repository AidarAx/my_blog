import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList
} satisfies Meta<typeof ArticleRecommendationsList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  }
}