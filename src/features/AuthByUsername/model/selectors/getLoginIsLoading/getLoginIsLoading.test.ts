import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading', () => {
  test('Should work with filled state', () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        error: 'error',
        username: '123',
        password: '123',
        isLoading: true
      }
    }

    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })

  test('Should work with empty state', () => {
    const state: Partial<StateSchema> = {}

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})
