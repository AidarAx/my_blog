import { StateSchema } from '@/app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword.test', () => {
  test('Should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123'
      }
    }

    expect(getLoginPassword(state as StateSchema)).toEqual('123')
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
