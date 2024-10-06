import { StateSchema } from '@/app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading.test', () => {
  test('Should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true
      }
    }

    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})
