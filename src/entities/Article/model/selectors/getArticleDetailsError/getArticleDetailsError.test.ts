import { StateSchema } from 'app/providers/StoreProvider'
import { getArticleDetailsError } from './getArticleDetailsError'

describe('getArticleDetailsError', () => {
  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error'
      }
    }

    expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
  })

  test('Should work with empty state', () => {
    const state: Partial<StateSchema> = {}

    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
  })
})
