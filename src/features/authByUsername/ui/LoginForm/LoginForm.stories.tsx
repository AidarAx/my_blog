import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import LoginForm from './LoginForm'

const meta = {
  title: 'features/LoginForm',
  args: {
    onSuccess: undefined
  },
  component: LoginForm
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

export const withError: Story = {
  args: {},
  decorators: [
    StoreDecorator({ loginForm: { error: 'ERROR', username: 'aasd', password: 'asd', isLoading: false } })
  ]
}

export const isLoading: Story = {
  args: {},
  decorators: [
    StoreDecorator({ loginForm: { username: 'aasd', password: 'asd', isLoading: true } })
  ]
}
