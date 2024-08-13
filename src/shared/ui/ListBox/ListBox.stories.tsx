import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/ListBox',
  component: ListBox
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    items: [
      {
        value: '123',
        content: '123'
      },
      {
        value: '123',
        content: '123'
      },
      {
        value: '123',
        content: '123'
      }
    ],
    defaultValue: 'Выберити значение '
  }
}

export const Disabled: Story = {
  args: {
    items: [
      {
        value: '123',
        content: '123'
      },
      {
        value: '123',
        content: '123',
        disabled: true
      },
      {
        value: '123',
        content: '123'
      }
    ],
    defaultValue: 'Выберити значение '
  }
}
