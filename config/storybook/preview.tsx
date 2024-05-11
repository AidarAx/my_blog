import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    RouterDecorator,
    ThemeDecorator(Theme.LIGHT)
  ]
}

export default preview
