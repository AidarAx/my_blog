import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './Code'

const meta = {
  title: 'Shared/Code',
  component: Code
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'consts meta = {\n' +
      '  title: \'Shared/Code\',\n' +
      '  component: Code\n' +
      '} satisfies Meta<typeof Code>'
  }
}
