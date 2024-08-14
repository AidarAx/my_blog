import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  decorators: [

    Story =>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story/>
      </div>
  ]
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

export const TopLeft: Story = {
  args: {
    direction: 'top-left',
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

export const TopRight: Story = {
  args: {
    direction: 'top-right',
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

export const BottomLeft: Story = {
  args: {
    direction: 'bottom-left',
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

export const BottomRight: Story = {
  args: {
    direction: 'bottom-right',
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
