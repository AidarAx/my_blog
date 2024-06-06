import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const authNavbar: Story = {
  args: {},
  decorators: [
    StoreDecorator({ user: { authData: { id: '1', username: 'admin' }, _inited: true } })
  ]
}

export const authNavbarDark: Story = {
  args: {},
  decorators: [
    StoreDecorator({ user: { authData: { id: '1', username: 'admin' }, _inited: true } }),
    ThemeDecorator(Theme.DARK)
  ]
}

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
