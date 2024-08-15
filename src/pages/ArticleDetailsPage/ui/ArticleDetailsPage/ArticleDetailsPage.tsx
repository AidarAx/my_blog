import { FC, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { AddCommentForm } from 'features/AddCommentForm'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { classNames, DynamicModuleLoader, ReducersList, useAppDispatch } from 'shared/lib'
import { Text, TextSize } from 'shared/ui'
import {
  getArticleDetailsRecommendationsError,
  getArticleDetailsRecommendationsIsLoading
} from '../../model/selectors/recommendations'
import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from '../../model/selectors/selectors'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import {
  fetchArticleRecommendations
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { articleDetailsCommentsReducers, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import {
  articleDetailsPageRecommendationsReducers,
  getArticleRecommendations
} from '../../model/slice/articleDetailsPageRecommendationsSlice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import * as cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducers,
  articleDetailsRecommendations: articleDetailsPageRecommendationsReducers
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading)
  const recommendationsError = useSelector(getArticleDetailsRecommendationsError)
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading)
  const error = useSelector(getArticleDetailsCommentsError)
  const dispatch = useAppDispatch()

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId(id))
      dispatch(fetchArticleRecommendations())
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
      <Page className={classNames(cls.articleDetailsPage, {}, [])}>
        <ArticleDetailsPageHeader/>
        <ArticleDetails id={id}/>
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t('Рекомендуем')}
        />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={cls.recommendations}
          target={'_blank'}
        />
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t('Коментарии')}/
        >
        <AddCommentForm onSendComment={onSendComment} className={cls.commentForm}/>
        <CommentList
          isLoading={isLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
