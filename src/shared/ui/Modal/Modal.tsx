import { ReactNode } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames, Mods } from '../../lib/classNames/classNames'
import { useModal } from '../../lib/hooks/useModal/useModal'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import * as cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 250

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen = false,
    onClose,
    lazy
  } = props

  const { theme } = useTheme()
  const { isClosing, close } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  if (lazy && !isOpen) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme])}>
        <Overlay onClick={close}/>
          <div className={cls.content}>
            {children}
          </div>
      </div>
    </Portal>
  )
}
