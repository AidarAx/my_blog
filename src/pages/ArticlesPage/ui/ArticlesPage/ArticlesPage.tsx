import React, { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { DynamicModuleLoader, ReducersList, useAppDispatch, useEffectOnce } from 'shared/lib'
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView
} from '../../model/selectors/articlePageSelectors'
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlePageReducers, getArticles } from '../../model/slice/articlePageSlice'
import { ArticlesPageVirtualList } from '../ArticlesPageVirtualList/ArticlesPageVirtualList'

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
  const [searchParams] = useSearchParams()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage())
  }, [dispatch])

  useEffectOnce(() => {
    dispatch(initArticlesPage(searchParams))
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <ArticlesPageVirtualList
        isLoading={isLoading}
        onLoadNextPart={onLoadNextPart}
        articles={articles}
        view={view}
      />
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
