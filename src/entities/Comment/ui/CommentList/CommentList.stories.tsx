import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { CommentList } from './CommentList'

const meta = {
  title: 'entities/CommentList',
  component: CommentList
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    comments: [
      {
        id: '1',
        user: { id: '1', username: 'Aidar' },
        text: 'Hello World'
      },
      {
        id: '2',
        user: { id: '2', username: 'Gulnaz' },
        text: 'Hello World'
      }
    ]
  }
}

export const Dark: Story = {
  args: {
    comments: [
      {
        id: '1',
        user: { id: '1', username: 'Aidar' },
        text: 'Hello World'
      },
      {
        id: '2',
        user: { id: '2', username: 'Gulnaz' },
        text: 'Hello World'
      }
    ]
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const isLoading: Story = {
  args: {
    isLoading: true
  }
}
