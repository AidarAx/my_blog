import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ProfileSchema } from '../types/profile'
import { profileActions, profileReducers } from './profileSlice'

const data = {
  firstname: 'Aidar',
  lastname: 'Akhmetgaliev',
  age: 22,
  username: 'admin',
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Kazan'
}

describe('profileSlice', () => {
  test('test set readonly', () => {
    const state: Partial<ProfileSchema> = {
      readonly: false
    }
    expect(profileReducers(
      state as ProfileSchema,
      profileActions.setReadonly(true))).toEqual({ readonly: true }
    )
  })

  test('test cancelEdit', () => {
    const state: Partial<ProfileSchema> = {
      data,
      form: { username: '' }
    }
    expect(profileReducers(
      state as ProfileSchema,
      profileActions.cancelEdit())).toEqual({
      readonly: true,
      data,
      form: data,
      validateError: undefined
    }
    )
  })

  test('test updateData', () => {
    const state: Partial<ProfileSchema> = {
      form: { username: '123456' }
    }
    expect(profileReducers(
      state as ProfileSchema,
      profileActions.updateData({
        username: '123'
      }))).toEqual({
      form: { username: '123' }
    }
    )
  })
})
