import 'app/styles/index.scss'
import { Decorator, StoryFn } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme): Decorator => (Story: StoryFn) => {
  return (
    <div className={`app ${theme}`}>
      <Story/>
    </div>
  )
}
