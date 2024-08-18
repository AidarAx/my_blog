import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading', () => {
  test('Should work with filled state', () => {
    const state: Partial<StateSchema> = {
      profile: {
        isLoading: false,
        readonly: true
      }
    }

    expect(getProfileIsLoading(state as StateSchema)).toEqual(false)
  })

  test('Should work with empty state', () => {
    const state: Partial<StateSchema> = {}

    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
  })
})
