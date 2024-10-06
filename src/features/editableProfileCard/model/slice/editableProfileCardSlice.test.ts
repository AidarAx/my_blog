import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { EditableProfileCardSchema } from '../types/editableProfileCardSchema'
import { editableProfileCardReducers, editableProfileCardActions } from './editableProfileCardSlice'

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
    const state: Partial<EditableProfileCardSchema> = {
      readonly: false
    }
    expect(editableProfileCardReducers(
      state as EditableProfileCardSchema,
      editableProfileCardActions.setReadonly(true))).toEqual({ readonly: true }
    )
  })

  test('test cancelEdit', () => {
    const state: Partial<EditableProfileCardSchema> = {
      data,
      form: { username: '' }
    }
    expect(editableProfileCardReducers(
      state as EditableProfileCardSchema,
      editableProfileCardActions.cancelEdit())).toEqual({
      readonly: true,
      data,
      form: data,
      validateError: undefined
    }
    )
  })

  test('test updateData', () => {
    const state: Partial<EditableProfileCardSchema> = {
      form: { username: '123456' }
    }
    expect(editableProfileCardReducers(
      state as EditableProfileCardSchema,
      editableProfileCardActions.updateData({
        username: '123'
      }))).toEqual({
      form: { username: '123' }
    }
    )
  })
})
