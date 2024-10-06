import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ProfileCard } from '@/entities/Profile'
import { classNames, DynamicModuleLoader, ReducersList, useAppDispatch, useEffectOnce } from '@/shared/lib'
import { Text, TextTheme } from '@/shared/ui'
import { ValidateProfileError } from '../../model/consts/consts'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getValidateProfileErrors } from '../../model/selectors/getValidateProfileErrors/getValidateProfileErrors'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { editableProfileCardActions, editableProfileCardReducers } from '../../model/slice/editableProfileCardSlice'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'

interface EditableProfileCardProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  profile: editableProfileCardReducers
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props
  const { t } = useTranslation('profile')

  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getValidateProfileErrors)

  const validateErrorsTranslation = {
    [ValidateProfileError.SERVER_ERROR]: t('Сереверная ошибка при сохранение'),
    [ValidateProfileError.INCORRECT_USER_AGE]: t('Некорректный возрост'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны')
  }

  useEffectOnce(() => {
    dispatch(fetchProfileData(id))
  })

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(editableProfileCardActions.updateData({ firstname: value || '' }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(editableProfileCardActions.updateData({ lastname: value || '' }))
  }, [dispatch])
  // ^\d+$
  const onChangeAge = useCallback((value?: string) => {
    if (value !== '' && value !== undefined) {
      if (/^\d+$/.test(value)) {
        dispatch(editableProfileCardActions.updateData({ age: Number(value) }))
      }
    } else {
      dispatch(editableProfileCardActions.updateData({ age: 0 }))
    }
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(editableProfileCardActions.updateData({ city: value || '' }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(editableProfileCardActions.updateData({ username: value || '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(editableProfileCardActions.updateData({ avatar: value || '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(editableProfileCardActions.updateData({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(editableProfileCardActions.updateData({ country }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <EditableProfileCardHeader/>
      <div className={classNames('', {}, [className])}>
        {validateErrors?.length && validateErrors.map(error => (
          <Text
            theme={TextTheme.ERROR}
            text={validateErrorsTranslation[error]}
            key={error}
            data-testid={'editableProfileCard.Error'}
          />
        ))}
        <ProfileCard
          readonly={readonly}
          data={formData}
          error={error}
          isLoading={isLoading}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  )
})
