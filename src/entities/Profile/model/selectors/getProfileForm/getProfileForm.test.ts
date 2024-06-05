import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileForm', () => {
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
        form: data,
        isLoading: false,
        readonly: true
      }
    }

    expect(getProfileForm(state as StateSchema)).toEqual(data)
  })

  test('Should work with empty state', () => {
    const state: Partial<StateSchema> = {}

    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
