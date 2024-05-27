import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducers } from 'entities/Profile'

const reducers: ReducersList = {
  profile: profileReducers
}

const ProfilePage = memo(() => {
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>{t('Сраница профиля')}</div>
    </DynamicModuleLoader>
  )
})

export default ProfilePage
