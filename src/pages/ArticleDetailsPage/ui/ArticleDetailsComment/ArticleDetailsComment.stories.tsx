import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsComment } from './ArticleDetailsComment'

const meta = {
  title: 'pages/ArticleDetailsComment',
  component: ArticleDetailsComment
} satisfies Meta<typeof ArticleDetailsComment>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    id: '1'
  }
}
