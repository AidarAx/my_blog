import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Text } from 'shared/ui/Text/Text'

const meta = {
  title: 'shared/Card',
  component: Card
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    children: <Text title={'test'} text={'test'}/>
  }
}

export const Dark: Story = {
  args: {
    children: <Text title={'test'} text={'test'}/>
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
