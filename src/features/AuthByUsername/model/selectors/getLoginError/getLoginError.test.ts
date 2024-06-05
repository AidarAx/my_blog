import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError', () => {
  test('Should work with filled state', () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        error: 'error',
        username: '123',
        password: '123',
        isLoading: false
      }
    }

    expect(getLoginError(state as StateSchema)).toEqual('error')
  })

  test('Should work with empty state', () => {
    const state: Partial<StateSchema> = {}

    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})
