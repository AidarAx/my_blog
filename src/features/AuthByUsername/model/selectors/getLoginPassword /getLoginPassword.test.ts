import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword', () => {
  test('Should return value', () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        error: 'error',
        username: '123',
        password: '123',
        isLoading: true
      }
    }

    expect(getLoginPassword(state as StateSchema)).toEqual('123')
  })

  test('Should work with empty state', () => {
    const state: Partial<StateSchema> = {}

    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
