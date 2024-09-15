import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, userActions } from 'entities/User'
import { RoutePath } from 'shared/config'
import { useAppDispatch } from 'shared/lib'
import { Avatar, Dropdown } from 'shared/ui'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const authData = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const { t } = useTranslation()

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (!authData) {
    return null
  }

  return (
    <Dropdown
      direction={'bottom-left'}
      items={[
        ...(isAdmin
          ? [{
              content: t('Админка'),
              href: RoutePath.admin_panel
            }]
          : []),
        {
          content: t('Создать статью'),
          href: RoutePath.article_create
        },
        {
          content: t('Профиль'),
          href: RoutePath.profile + authData.id
        },
        {
          content: t('Выйти'),
          onClick: onLogout
        }
      ]}
      trigger={<Avatar size={30} src={authData.avatar} alt={'avatar'}/>}
    />
  )
})
