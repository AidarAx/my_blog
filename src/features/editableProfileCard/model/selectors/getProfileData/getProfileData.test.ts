import { StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { getProfileData } from './getProfileData'

describe('getProfileData.test', () => {
  test('Should work with filled state', () => {
    const data = {
      firstname: 'Aidar',
      lastname: 'Akhmetgaliev',
      age: 22,
      username: 'admin',
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Kazan'
    }

    const state: Partial<StateSchema> = {
      profile: {
        data,
        isLoading: false,
        readonly: true
      }
    }

    expect(getProfileData(state as StateSchema)).toEqual(data)
  })

  test('Should work with empty state', () => {
    const state: Partial<StateSchema> = {}

    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
