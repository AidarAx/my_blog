import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { ArticleRecommendationsList } from 'features/articleRecommendationsList'
import { ArticleDetails } from 'entities/Article'
import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib'
import { articleDetailsCommentsReducers } from '../../model/slice/articleDetailsCommentsSlice'
import { articleDetailsPageRecommendationsReducers } from '../../model/slice/articleDetailsPageRecommendationsSlice'
import { ArticleDetailsComment } from '../ArticleDetailsComment/ArticleDetailsComment'
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
        <ArticleRecommendationsList/>
        <ArticleDetailsComment id={id}/>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
