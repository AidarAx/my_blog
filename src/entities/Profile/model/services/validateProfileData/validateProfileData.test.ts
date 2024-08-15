import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'
import { validateProfileData } from './validateProfileData'

const data = {
  firstname: 'Aidar',
  lastname: 'Akhmetgaliev',
  age: 22,
  username: 'admin',
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Kazan'
}

describe('loginByUsername', () => {
  test('Success', async () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test('Without first and last name', async () => {
    const result = validateProfileData({ ...data, firstname: '', lastname: '' })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })

  test('Incorrect age', async () => {
    const result = validateProfileData({ ...data, age: 0 })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_AGE
    ])
  })

  test('Incorrect all', async () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USER_AGE
    ])
  })

  test('No data', async () => {
    const result = validateProfileData()

    expect(result).toEqual([
      ValidateProfileError.NO_DATA
    ])
  })
})
