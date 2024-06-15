import type { Meta, StoryObj } from '@storybook/react'
import AddCommentForm from './AddCommentForm'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm
} satisfies Meta<typeof AddCommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    onSendComment: () => undefined
  }
}

export const Dark: Story = {
  args: {
    onSendComment: () => undefined
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
