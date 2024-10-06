import { StateSchema } from '@/app/providers/StoreProvider'
import { ValidateProfileError } from '@/features/editableProfileCard/model/consts/consts'
import { getValidateProfileErrors } from './getValidateProfileErrors'

describe('getValidateProfileErrors.test', () => {
  test('Should work with filled state', () => {
    const state: Partial<StateSchema> = {
      profile: {
        isLoading: false,
        readonly: true,
        validateErrors: [
          ValidateProfileError.NO_DATA
        ]
      }
    }

    expect(getValidateProfileErrors(state as StateSchema)).toEqual([ValidateProfileError.NO_DATA])
  })

  test('Should work with empty state', () => {
    const state: Partial<StateSchema> = {}

    expect(getValidateProfileErrors(state as StateSchema)).toEqual(undefined)
  })
})
