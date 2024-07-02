import React, { FC, memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './ArticlesPage.module.scss'
import { ArticleList, ArticleView, ArticleViewSelectors } from 'entities/Article'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlePageActions, articlePageReducers, getArticles } from '../model/slice/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView
} from '../model/selectors/articlePageSelectors'
import { Page } from 'widgets/Page'
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlePage: articlePageReducers
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlePageIsLoading)
  const error = useSelector(getArticlePageError)
  const view = useSelector(getArticlePageView)

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage())
  }, [dispatch])

  useEffect(() => {
    dispatch(initArticlesPage())
  }, [])

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.articlesPage, {}, [className])}
      >
        <ArticleViewSelectors view={view} onViewClick={onChangeView}/>
        <ArticleList isLoading={isLoading} view={view} articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
