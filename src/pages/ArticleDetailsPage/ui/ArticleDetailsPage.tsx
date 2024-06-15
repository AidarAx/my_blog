import { FC, memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Article'
import * as cls from './ArticleDetailsPage.module.scss'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducers, getArticleComments } from '../model/slice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsIsLoading
} from '../model/selectors/selectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducers
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading)
  const error = useSelector(getArticleDetailsCommentsError)
  const dispatch = useAppDispatch()

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId(id))
    }
  }, [])

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [])}>
        { t('Страница не найдена') }
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.articleDetailsPage, {}, [])}>
        <ArticleDetails id={id}/>
        <Text className={cls.commentTitle} title={t('Коментарии')}/>
        <AddCommentForm onSendComment={onSendComment} className={cls.commentForm}/>
        <CommentList
          isLoading={isLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
