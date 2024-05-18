import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
