import React, { FC, memo, useCallback } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlePageReducers, getArticles } from '../../model/slice/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView
} from '../../model/selectors/articlePageSelectors'
import { Page } from 'widgets/Page'
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilter } from 'pages/ArticlesPage/ui/ArticlesPageFilter/ArticlesPageFilter'
import { useSearchParams } from 'react-router-dom'
import { ArticlesPageVirtualList } from 'pages/ArticlesPage/ui/ArticlesPageVirtualList/ArticlesPageVirtualList'
import { useEffectOnce } from 'shared/lib/hooks/useEffectOnce/useEffectOnce'

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
