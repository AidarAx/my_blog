import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'

const article = {
  id: '1',
  title: 'Javascript',
  user: 'Admin',
  subtitle: 'Javascript',
  img: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
  views: 2,
  createdAt: '09.12.2001',
  type: [],
  blocks: []
}

const meta = {
  title: 'features/articleRecommendationsList',
  component: ArticleRecommendationsList,
  parameters: {
    mockData: [
      {
        url: __API__ + '/articles?_limit=4',
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' }
        ]
      }
    ]
  }
} satisfies Meta<typeof ArticleRecommendationsList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  }
}
