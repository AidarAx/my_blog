import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError.test', () => {
  test('Should work with filled state', () => {
    const state: Partial<StateSchema> = {
      profile: {
        isLoading: false,
        readonly: true,
        error: 'error'
      }
    }

    expect(getProfileError(state as StateSchema)).toEqual('error')
  })

  test('Should work with empty state', () => {
    const state: Partial<StateSchema> = {}

    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
