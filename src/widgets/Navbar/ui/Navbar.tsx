import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { LoginModal } from 'features/AuthByUsername'
import { getUserAuthData, isUserAdmin, userActions } from 'entities/User'
import { RoutePath } from 'shared/config'
import { classNames } from 'shared/lib'
import { Button, ButtonTheme, Text, TextTheme, AppLink, AppLinkTheme, HStack, Avatar } from 'shared/ui'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import * as cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const isAdmin = useSelector(isUserAdmin)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
        <HStack align={'center'} justify={'between'} className={classNames(cls.navbar, {}, [className])}>
          <Text
            theme={TextTheme.INVERTED}
            title={'Blog'}
            className={cls.appName}
          />
          <HStack gap={'32'} align={'center'}>
            <AppLink
              to={RoutePath.article_create}
              theme={AppLinkTheme.SECONDARY}
            >
              {t('Создать статью')}
            </AppLink>
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
          </HStack>
        </HStack>
    )
  }

  return (
      <HStack align={'center'} justify={'between'} className={classNames(cls.navbar, {}, [className])}>
        <Button onClick={onShowModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.authBtn}>
          {t('Войти')}
        </Button>
        {isAuthModal && (
          <LoginModal
            isOpen={isAuthModal}
            onClose={onCloseModal}
          />
        )}
      </HStack>
  )
}
)
