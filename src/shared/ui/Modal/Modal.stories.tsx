import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Modal } from './Modal'

const meta = {
  title: 'Shared/Modal',
  component: Modal
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam eligendi ex expedita fuga ipsa ipsum laboriosam, magni minima nihil odio quo rem rerum veniam. Corporis enim maiores voluptate.'
  }
}

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam eligendi ex expedita fuga ipsa ipsum laboriosam, magni minima nihil odio quo rem rerum veniam. Corporis enim maiores voluptate.'
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
