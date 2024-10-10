import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notifications.svg'
import { AnimationProvider, classNames } from '@/shared/lib'
import { Button, Drawer, Icon, Popover } from '@/shared/ui'
import * as cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const trigger = (
    <Button onClick={onOpenDrawer}>
      <Icon Svg={NotificationIcon} inverted/>
    </Button>
  )

  return (
    <>
      <BrowserView>
        <Popover
          className={classNames('', {}, [className])}
          direction={'bottom-left'}
          trigger={trigger}>
          <NotificationList className={cls.notifications}/>
        </Popover>
      </BrowserView>

      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList/>
        </Drawer>
      </MobileView>
    </>
  )
})
