import { classNames } from 'shared/lib/classNames/classNames'

import * as cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [isAuthModal])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [isAuthModal])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={onShowModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.authBtn}>
        {t('Войти')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      >

      </LoginModal>
    </div>
  )
}
