import { ValidateProfileError } from 'features/EditableProfileCard/model/consts/consts'
import { Profile } from 'entities/Profile'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }

  const { firstname, lastname, age } = profile
  const errors: ValidateProfileError[] = []

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age) || age < 6 || age > 80) {
    errors.push(ValidateProfileError.INCORRECT_USER_AGE)
  }

  return errors
}
