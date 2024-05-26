import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
  test('Should return value', () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        error: 'error',
        username: '123',
        password: '123',
        isLoading: true
      }
    }

    expect(getLoginUsername(state as StateSchema)).toEqual('123')
  })

  test('Should work with empty state', () => {
    const state: Partial<StateSchema> = {}

    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
