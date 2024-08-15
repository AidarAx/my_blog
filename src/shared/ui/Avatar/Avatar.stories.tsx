import type { Meta, StoryObj } from '@storybook/react'
import AvatarImg from '../../assets/tests/AvatarImg.png'
import { Avatar } from './Avatar'

const meta = {
  title: 'Shared/Avatar',
  component: Avatar
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg
  }
}

export const Small: Story = {
  args: {
    size: 40,
    src: AvatarImg
  }
}
