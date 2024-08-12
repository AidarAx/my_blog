import { classNames } from 'shared/lib'
import * as cls from './Navbar.module.scss'
import { Button, ButtonTheme, Text, TextTheme, AppLink, AppLinkTheme, HStack } from 'shared/ui'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { RoutePath } from 'shared/config'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

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
          <HStack gap={'16'}>
            <AppLink
              to={RoutePath.article_create}
              theme={AppLinkTheme.SECONDARY}
            >
              {t('Создать статью')}
            </AppLink>
            <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED} className={cls.authBtn}>
              {t('Выйти')}
            </Button>
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
