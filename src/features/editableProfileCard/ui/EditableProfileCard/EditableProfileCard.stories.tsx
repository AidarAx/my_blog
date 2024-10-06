import type { Meta, StoryObj } from '@storybook/react'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { EditableProfileCard } from './EditableProfileCard'

const meta = {
  title: 'features/editableProfileCard',
  component: EditableProfileCard
} satisfies Meta<typeof EditableProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    id: '1'
  },
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
