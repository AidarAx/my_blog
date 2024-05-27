import { Country, Currency } from 'shared/consts/commons'

export interface Profile {
  firstname: string
  lastname: string
  age: 22
  currency: Currency
  country: Country
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
