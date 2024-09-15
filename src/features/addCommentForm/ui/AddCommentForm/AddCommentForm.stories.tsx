import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import AddCommentForm from './AddCommentForm'

const meta = {
  title: 'features/addCommentForm',
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
