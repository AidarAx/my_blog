import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'Shared/Text',
  component: Text
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
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

export const onlyTitle: Story = {
  args: {
    title: 'Title Title Title Title'
  }
}

export const onlyText: Story = {
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

export const onlyTitleDark: Story = {
  args: {
    title: 'Title Title Title Title'
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const onlyTextDark: Story = {
  args: {
    text: 'Text Text Text Text'
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
