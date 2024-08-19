import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { classNames, useAppDispatch } from 'shared/lib'
import { Text, Button, ButtonTheme, HStack } from 'shared/ui'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { editableProfileCardActions } from '../../model/slice/editableProfileCardSlice'
import * as cls from './EditableProfileCardHeader.module.scss'

interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = memo(({ className }: EditableProfileCardHeaderProps) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)

  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id

  const onEdit = useCallback(() => {
    dispatch(editableProfileCardActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(editableProfileCardActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
      <HStack justify={'between'} className={classNames(cls.EditableProfileCardHeader, {}, [className])}>
        <Text title={t('Профиль')}/>
        {canEdit && (
          <div>
            {
              readonly
                ? (
                  <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                    data-testid={'EditableProfileCardHeader.EditButton'}
                  >
                    {t('Редактировать')}
                  </Button>
                  )
                : (
                  <HStack gap={'8'}>
                    <Button
                      theme={ButtonTheme.OUTLINE_RED}
                      onClick={onCancelEdit}
                      data-testid={'EditableProfileCardHeader.CancelButton'}
                    >
                      {t('Отменить')}
                    </Button>
                    <Button
                      theme={ButtonTheme.OUTLINE}
                      onClick={onSave}
                      data-testid={'EditableProfileCardHeader.SaveButton'}
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
