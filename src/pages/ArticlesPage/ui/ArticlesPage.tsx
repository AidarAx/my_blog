import React, { FC, memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './ArticlesPage.module.scss'
import { ArticleList, ArticleView, ArticleViewSelectors } from 'entities/Article'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlePageActions, articlePageReducers, getArticles } from '../model/slice/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleList } from '../model/services/fetchArticleList/fetchArticleList'
import { useSelector } from 'react-redux'
import {
  getArticlePageError,
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageNum,
  getArticlePageView
} from '../model/selectors/articlePageSelectors'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage'

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
  const page = useSelector(getArticlePageNum)
  const hasMore = useSelector(getArticlePageHasMore)

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage())
  }, [dispatch])

  useEffect(() => {
    dispatch(articlePageActions.initState())
    dispatch(fetchArticleList({
      page: 1
    }))
  }, [dispatch])

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
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
