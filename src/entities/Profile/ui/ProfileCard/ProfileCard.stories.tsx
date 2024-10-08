import type { Meta, StoryObj } from '@storybook/react'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import avatar from '@/shared/assets/tests/AvatarImg.png'
import { ProfileCard } from './ProfileCard'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    data: {
      firstname: 'Aidar',
      lastname: 'Akhmetgaliev',
      age: 22,
      username: 'admin',
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Kazan',
      avatar
    }
  }
}

export const withError: Story = {
  args: {
    error: 'true'
  }
}

export const isLoading: Story = {
  args: {
    isLoading: true
  }
}
