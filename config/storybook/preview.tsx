import type { Preview } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

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
    StoreDecorator(),
    RouterDecorator,
    ThemeDecorator(Theme.LIGHT)
  ]
}

export default preview
