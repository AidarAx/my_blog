import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { AddCommentForm } from '@/features/addCommentForm'
import { CommentList } from '@/entities/Comment'
import { useAppDispatch, useEffectOnce } from '@/shared/lib'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui'
import { getArticleDetailsCommentsError } from '../../model/selectors/getArticleDetailsCommentsError/getArticleDetailsCommentsError'
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsCommentsIsLoading/getArticleDetailsCommentsIsLoading'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import * as cls from './ArticleDetailsComment.module.scss'

interface ArticleDetailsCommentProps {
  className?: string
  id: string
}

export const ArticleDetailsComment = (props: ArticleDetailsCommentProps) => {
  const { className, id } = props
  const { t } = useTranslation()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading)
  const error = useSelector(getArticleDetailsCommentsError)
  const dispatch = useAppDispatch()

  useEffectOnce(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  return (
    <div className={classNames(cls.ArticleDetailsComment, {}, [className])}>
      <Text
        size={TextSize.L}
        className={cls.commentTitle}
        title={t('Коментарии')}
      />
        <AddCommentForm onSendComment={onSendComment} className={cls.commentForm}/>
        <CommentList
          isLoading={isLoading}
          comments={comments}
        />
    </div>
  )
}
