import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          firstname: 'Aidar',
          lastname: 'Akhmetgaliev',
          age: 22,
          username: 'admin',
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Kazan'
        },
        isLoading: false,
        readonly: true
      }
    })
  ]
}

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
          firstname: 'Aidar',
          lastname: 'Akhmetgaliev',
          age: 22,
          username: 'admin',
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Kazan'
        },
        isLoading: false,
        readonly: true
      }
    })
  ]
}
