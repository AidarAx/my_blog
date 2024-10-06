import { memo } from 'react'
import { classNames } from '@/shared/lib'
import { Card, CardTheme, Text } from '@/shared/ui'
import { Notification } from '../../model/types/notification'
import * as cls from './NotificationItem.module.scss'

interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props

  const content = (
    <Card theme={CardTheme.OUTLINE} className={classNames(cls.NotificationItem, {}, [className])}>
      <Text title={item.title} text={item.description}/>
    </Card>
  )

  if (item.href) {
    return (
      <a className={cls.link} href={item.href} target={'_blank'} rel="noreferrer">
        {content}
      </a>
    )
  }

  return content
})
