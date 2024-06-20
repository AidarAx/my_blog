import { FC, memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './ArticlesPage.module.scss'
import { ArticleList, ArticleView, ArticleViewSelectors } from 'entities/Article'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlePageActions, articlePageReducers, getArticles } from '../model/slice/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleList } from '../model/services/fetchArticleList/fetchArticleList'
import { useSelector } from 'react-redux'
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from '../model/selectors/articlePageSelectors'

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

  useEffect(() => {
    dispatch(fetchArticleList())
    dispatch(articlePageActions.initState())
  }, [dispatch])

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ArticleViewSelectors view={view} onViewClick={onChangeView}/>
      <div className={classNames(cls.articlesPage, {}, [className])}>
        <ArticleList isLoading={isLoading} view={view} articles={articles}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
