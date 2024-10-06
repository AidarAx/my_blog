import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Text, TextSize, TextTheme } from './Text'

const meta = {
  title: 'Shared/Text',
  component: Text
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Size_S: Story = {
  args: {
    size: TextSize.S,
    title: 'Title Title Title Title',
    text: 'Text Text Text Text'
  }
}

export const Size_M: Story = {
  args: {
    size: TextSize.M,
    title: 'Title Title Title Title',
    text: 'Text Text Text Text'
  }
}

export const Size_L: Story = {
  args: {
    size: TextSize.L,
    title: 'Title Title Title Title',
    text: 'Text Text Text Text'
  }
}

export const Error: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Title Title Title Title',
    text: 'Text Text Text Text'
  }
}

export const OnlyTitle: Story = {
  args: {
    title: 'Title Title Title Title'
  }
}

export const OnlyText: Story = {
  args: {
    text: 'Text Text Text Text'
  }
}

export const PrimaryDark: Story = {
  args: {
    title: 'Title Title Title Title',
    text: 'Text Text Text Text'
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title Title Title Title'
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const OnlyTextDark: Story = {
  args: {
    text: 'Text Text Text Text'
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
