import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

const meta = {
  title: 'Shared/AppLink',
  component: AppLink,
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY
  }
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY
  }
}

export const PrimaryDark: Story = {
  args: {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const SecondaryDark: Story = {
  args: {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
