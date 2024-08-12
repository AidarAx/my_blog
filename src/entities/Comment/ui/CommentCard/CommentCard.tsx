import { classNames } from 'shared/lib'
import * as cls from './CommentCard.module.scss'
import { Comment } from '../../model/types/comment'
import { Avatar, Skeleton, AppLink, Text } from 'shared/ui'
import { RoutePath } from 'shared/config'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border={'50%'}/>
          <Skeleton width={100} height={16} className={cls.username}/>
        </div>
        <Skeleton width={'100%'} height={50} className={cls.text}/>
      </div>
    )
  }

  if (!comment) {
    return null
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar}/> : null}
        <Text className={cls.username} title={comment.user.username}/>
      </AppLink>
      <Text className={cls.text} text={comment.text}/>
    </div>
  )
}
