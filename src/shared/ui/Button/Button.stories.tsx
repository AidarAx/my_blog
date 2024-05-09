import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'Shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: ThemeButton.OUTLINE
  }
}

export const OutlineDark: Story = {
  args: {
    children: 'Outline',
    theme: ThemeButton.OUTLINE
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: ThemeButton.CLEAR
  }
}
