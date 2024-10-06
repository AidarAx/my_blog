import { StateSchema } from '@/app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError.test', () => {
  test('Should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error'
      }
    }

    expect(getLoginError(state as StateSchema)).toEqual('error')
  })

  test('Should work with empty state', () => {
    const state: Partial<StateSchema> = {}

    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})
