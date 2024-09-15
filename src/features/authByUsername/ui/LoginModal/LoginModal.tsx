import { Suspense } from 'react'
import { classNames } from 'shared/lib'
import { Modal, Loader } from 'shared/ui'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import * as cls from './LoginModal.module.scss'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
  const {
    className,
    isOpen,
    onClose
  } = props

  return (
    <Modal
      className={classNames(cls.loginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy={true}
    >
      <Suspense fallback={<Loader/>}>
        <LoginFormAsync onSuccess={onClose}/>
      </Suspense>
    </Modal>
  )
}
