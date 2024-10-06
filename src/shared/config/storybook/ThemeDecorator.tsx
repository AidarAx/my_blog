import '@/app/styles/index.scss'
import { Decorator, StoryFn } from '@storybook/react'
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme): Decorator => (Story: StoryFn) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story/>
      </div>
    </ThemeProvider>
  )
}
