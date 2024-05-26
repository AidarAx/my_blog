import { loginActions, loginReducers } from './loginSlice'
import { LoginSchema } from '../types/loginSchema'

describe('loginSlice', () => {
  test('test set username', () => {
    const state: Partial<LoginSchema> = {
      username: '123'
    }
    expect(loginReducers(
      state as LoginSchema,
      loginActions.setUsername('123456'))).toEqual({ username: '123456' }
    )
  })

  test('test set password', () => {
    const state: Partial<LoginSchema> = {
      password: '123'
    }
    expect(loginReducers(
      state as LoginSchema,
      loginActions.setPassword('123456'))).toEqual({ password: '123456' }
    )
  })
})
