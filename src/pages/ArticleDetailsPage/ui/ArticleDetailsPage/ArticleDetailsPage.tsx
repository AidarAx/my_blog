import { FC, memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails, ArticleList } from 'entities/Article'
import * as cls from './ArticleDetailsPage.module.scss'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducers, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from '../../model/selectors/selectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Page } from 'widgets/Page'
import {
  articleDetailsPageRecommendationsReducers,
  getArticleRecommendations
} from '../../model/slice/articleDetailsPageRecommendationsSlice'
import {
  getArticleDetailsRecommendationsError,
  getArticleDetailsRecommendationsIsLoading
} from '../../model/selectors/recommendations'
import {
  fetchArticleRecommendations
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { ArticleDetailsPageHeader } from 'pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader'

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
