import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Comment } from '../../model/types/comment'
import * as cls from './CommentList.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard className={cls.comment} isLoading={isLoading}/>
        <CommentCard className={cls.comment} isLoading={isLoading}/>
        <CommentCard className={cls.comment} isLoading={isLoading}/>
      </div>
    )
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map(comment => (
          <CommentCard className={cls.comment} key={comment.id} comment={comment} isLoading={isLoading}/>
        ))
        : <Text text={t('Комментарии отсутсвуют')} />
      }
    </div>
  )
}
