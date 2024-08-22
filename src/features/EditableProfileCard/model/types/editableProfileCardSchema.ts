import { ValidateProfileError } from 'features/EditableProfileCard/model/consts/consts'
import { Profile } from 'entities/Profile'

export interface EditableProfileCardSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: ValidateProfileError[]
}
