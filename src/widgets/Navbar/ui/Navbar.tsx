import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { LoginModal } from 'features/authByUsername'
import { AvatarDropdown } from 'features/avatarDropdown'
import { NotificationButton } from 'features/notificationButton'
import { getUserAuthData } from 'entities/User'
import { classNames } from 'shared/lib'
import { Button, ButtonTheme, Text, TextTheme, HStack } from 'shared/ui'
import * as cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  if (authData) {
    return (
        <HStack align={'center'} justify={'between'} className={classNames(cls.navbar, {}, [className])}>
          <Text
            theme={TextTheme.INVERTED}
            title={'Blog'}
            className={cls.appName}
          />
          <HStack gap={'16'} align={'center'}>
            <NotificationButton/>
            <AvatarDropdown/>
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
