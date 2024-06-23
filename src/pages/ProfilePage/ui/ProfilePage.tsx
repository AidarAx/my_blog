import { useTranslation } from 'react-i18next'
import { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getValidateProfileErrors,
  profileActions,
  ProfileCard,
  profileReducers
} from 'entities/Profile'
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'
import { useParams } from 'react-router-dom'
import { Page } from 'shared/ui/Page/Page'

const reducers: ReducersList = {
  profile: profileReducers
}

const ProfilePage = memo(() => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getValidateProfileErrors)
  const { id } = useParams<{ id: string }>()

  const validateErrorsTranslation = {
    [ValidateProfileError.SERVER_ERROR]: t('Сереверная ошибка при сохранение'),
    [ValidateProfileError.INCORRECT_USER_AGE]: t('Некорректный возрост'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны')
  }

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData(id))
    }
  }, [dispatch])

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateData({ firstname: value || '' }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateData({ lastname: value || '' }))
  }, [dispatch])
  // ^\d+$
  const onChangeAge = useCallback((value?: string) => {
    if (value !== '' && value !== undefined) {
      if (/^\d+$/.test(value)) {
        dispatch(profileActions.updateData({ age: Number(value) }))
      }
    } else {
      dispatch(profileActions.updateData({ age: 0 }))
    }
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateData({ city: value || '' }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateData({ username: value || '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateData({ avatar: value || '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateData({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateData({ country }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames('', {}, [])}>
        <ProfilePageHeader/>
        {validateErrors?.length && validateErrors.map(error => (
          <Text theme={TextTheme.ERROR} text={validateErrorsTranslation[error]} key={error}/>
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
      </Page>
    </DynamicModuleLoader>
  )
})

export default ProfilePage
