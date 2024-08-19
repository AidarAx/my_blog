import { StateSchema } from 'app/providers/StoreProvider'
import { getArticleDetailsIsLoading } from './getArticleDetailsIsLoading'

describe('getArticleDetailsIsLoading.test', () => {
  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    }

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
  })
})
