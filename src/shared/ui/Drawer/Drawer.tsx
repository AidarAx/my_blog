import { memo, ReactNode } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames, Mods } from 'shared/lib'
import { useModal } from 'shared/lib/hooks/useModal/useModal'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import * as cls from './Drawer.module.scss'

interface DrawerProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy
  } = props
  const { theme } = useTheme()

  const { isClosing, close } = useModal({
    animationDelay: 300,
    isOpen,
    onClose
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
      <div className={classNames(cls.Drawer, mods, [className, theme])}>
        <Overlay onClick={close}/>
          <div className={cls.content}>
            {children}
          </div>
      </div>
    </Portal>
  )
}
)
