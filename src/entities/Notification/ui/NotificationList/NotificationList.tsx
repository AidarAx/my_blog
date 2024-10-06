import { memo } from 'react'
import { NotificationItem } from '@/entities/Notification/ui/NotificationItem/NotificationItem'
import { classNames } from '@/shared/lib'
import { Skeleton, VStack } from '@/shared/ui'
import { useNotifications } from '../../api/NotificationApi'

interface NotificationListProps {
  className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 5000
  })

  if (isLoading) {
    return (
      <VStack gap={'8'} max className={classNames('', {}, [className])}>
        <Skeleton width={'100%'} border={'8px'} height={'90px'}/>
        <Skeleton width={'100%'} border={'8px'} height={'90px'}/>
        <Skeleton width={'100%'} border={'8px'} height={'90px'}/>
      </VStack>
    )
  }

  return (
    <VStack gap={'8'} max className={classNames('', {}, [className])}>
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  )
})
