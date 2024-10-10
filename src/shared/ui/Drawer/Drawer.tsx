import { memo, ReactNode, useCallback, useEffect } from 'react'
import { useTheme } from '@/app/providers/ThemeProvider'
import { AnimationProvider, classNames, useAnimationLibs } from '@/shared/lib'
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

const height = window.innerHeight - 100

export const DrawerContent = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props

  const { Spring, Gesture } = useAnimationLibs()
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))
  const { theme } = useTheme()

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api])

  useEffect(() => {
    if (isOpen) {
      openDrawer()
    }
  }, [api, isOpen, openDrawer])

  const closeDrawer = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose
    })
  }

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      offset: [, oy],
      cancel
    }) => {
      if (oy < -70) cancel()
      if (last) {
        oy > height * 0.5 || (vy > 0.5 && dy > 0)
          ? closeDrawer(vy)
          : openDrawer()
      } else api.start({ y: oy, immediate: true })
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true
    }
  )

  if (!isOpen) {
    return null
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
    <Portal>
      <div className={classNames(cls.Drawer, {}, [className, theme])}>
        <Overlay onClick={closeDrawer}/>
          <Spring.a.div
            className={cls.sheet}
            style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
            {...bind()}
          >
            {children}
          </Spring.a.div>
      </div>
    </Portal>
  )
}
)

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs()

  if (!isLoaded) return null

  return (
    <DrawerContent {...props}/>
  )
}

export const Drawer = (props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props}/>
    </AnimationProvider>
  )
}
