import { memo } from 'react'
import { NotificationList } from 'entities/Notification'
import NotificationIcon from 'shared/assets/icons/notifications.svg'
import { classNames } from 'shared/lib'
import { Button, Icon, Popover } from 'shared/ui'
import * as cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
  return (
    <Popover
      className={classNames('', {}, [className])}
      direction={'bottom-left'}
      trigger={(
        <Button>
          <Icon Svg={NotificationIcon} inverted/>
        </Button>
      )}>
      <NotificationList className={cls.notifications}/>
    </Popover>
  )
})
