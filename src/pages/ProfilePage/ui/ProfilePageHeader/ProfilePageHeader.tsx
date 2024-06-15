import * as cls from './ProfilePageHeader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { memo, useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
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
      <div className={classNames(cls.profilePageHeader, {}, [className])}>
        <Text title={t('Профиль')}/>
        {canEdit && (
          <div>
            {
              readonly
                ? (
                  <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                    className={cls.editBtn}
                  >
                    {t('Редактировать')}
                  </Button>
                  )
                : (
                  <div className={cls.editBtn}>
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
                  </div>
                  )
            }
          </div>
        )}
      </div>
  )
}
)
