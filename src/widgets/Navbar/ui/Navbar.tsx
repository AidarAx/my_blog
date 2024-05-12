import { classNames } from 'shared/lib/classNames/classNames'

import * as cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.authBtn}>
        {t('Войти')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam eligendi ex expedita fuga ipsa ipsum laboriosam, magni minima nihil odio quo rem rerum veniam. Corporis enim maiores voluptate.
      </Modal>
    </div>
  )
}
