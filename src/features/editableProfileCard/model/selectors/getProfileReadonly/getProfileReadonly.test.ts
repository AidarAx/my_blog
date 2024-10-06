import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly.test', () => {
  test('Should work with filled state', () => {
    const state: Partial<StateSchema> = {
      profile: {
        isLoading: false,
        readonly: true
      }
    }

    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })

  test('Should work with empty state', () => {
    const state: Partial<StateSchema> = {}

    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
  })
})
