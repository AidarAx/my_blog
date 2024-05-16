import { getCounterValue } from './getCounterValue'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 }
    }

    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
