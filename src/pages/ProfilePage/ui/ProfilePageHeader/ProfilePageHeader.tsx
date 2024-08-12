import * as cls from './ProfilePageHeader.module.scss'
import { classNames, useAppDispatch } from 'shared/lib'
import { Text, Button, ButtonTheme, HStack } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { memo, useCallback } from 'react'
import { getUserAuthData } from 'entities/User'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)

  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
      <HStack justify={'between'} className={classNames(cls.profilePageHeader, {}, [className])}>
        <Text title={t('Профиль')}/>
        {canEdit && (
          <div>
            {
              readonly
                ? (
                  <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                  >
                    {t('Редактировать')}
                  </Button>
                  )
                : (
                  <HStack gap={'8'}>
                    <Button
                      theme={ButtonTheme.OUTLINE_RED}
                      onClick={onCancelEdit}
                    >
                      {t('Отменить')}
                    </Button>
                    <Button
                      theme={ButtonTheme.OUTLINE}
                      onClick={onSave}
                    >
                      {t('Сохранить')}
                    </Button>
                  </HStack>
                  )
            }
          </div>
        )}
      </HStack>
  )
}
)
