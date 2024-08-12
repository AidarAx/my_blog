import { useTranslation } from 'react-i18next'
import { classNames, useAppDispatch, useDebounce } from 'shared/lib'
import * as cls from './ArticlesPageFilter.module.scss'
import { ArticleSortField, ArticleView, ArticleViewSelectors, ArticleType } from 'entities/Article'
import React, { memo, useCallback } from 'react'
import { articlePageActions } from '../../model/slice/articlePageSlice'
import { useSelector } from 'react-redux'
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView
} from '../../model/selectors/articlePageSelectors'
import { Card, Input } from 'shared/ui'
import { ArticleSortSelector } from 'features/ArticleSortSelector'
import { SortOrder } from 'shared/types/sortOrder'
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList'
import { ArticleTypeTabs } from 'features/ArticleTypeTabs'

interface ArticlesPageFilterProps {
  className?: string
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
  const { className } = props
  const { t } = useTranslation()
  const view = useSelector(getArticlePageView)
  const sort = useSelector(getArticlePageSort)
  const order = useSelector(getArticlePageOrder)
  const search = useSelector(getArticlePageSearch)
  const type = useSelector(getArticlePageType)
  const dispatch = useAppDispatch()

  const fetchData = useCallback(() => {
    dispatch(fetchArticleList({ replace: true }))
  }, [dispatch])

  const debounceFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
    dispatch(articlePageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlePageActions.setSort(newSort))
    dispatch(articlePageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlePageActions.setOrder(newOrder))
    dispatch(articlePageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlePageActions.setSearch(search))
    dispatch(articlePageActions.setPage(1))
    debounceFetchData()
  }, [dispatch, debounceFetchData])

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlePageActions.setType(value))
    dispatch(articlePageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  return (
    <div className={classNames('', {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelectors
          view={view}
          onViewClick={onChangeView}
        />
      </div>
      <Card className={cls.search}>
        <Input onChange={onChangeSearch} value={search} placeholder={t('Поиск')}/>
      </Card>
      <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType}/>
    </div>
  )
})
