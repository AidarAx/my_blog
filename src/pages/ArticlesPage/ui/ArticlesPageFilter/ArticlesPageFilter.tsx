import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { ArticleSortField, ArticleView, ArticleViewSelectors, ArticleType } from '@/entities/Article'
import { classNames, useAppDispatch, useDebounce } from '@/shared/lib'
import { SortOrder } from '@/shared/types/sortOrder'
import { Card, Input } from '@/shared/ui'
import { getArticlePageOrder } from '../../model/selectors/getArticlePageOrder/getArticlePageOrder'
import { getArticlePageSearch } from '../../model/selectors/getArticlePageSearch/getArticlePageSearch'
import { getArticlePageSort } from '../../model/selectors/getArticlePageSort/getArticlePageSort'
import { getArticlePageType } from '../../model/selectors/getArticlePageType/getArticlePageType'
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView'
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList'
import { articlePageActions } from '../../model/slice/articlePageSlice'
import * as cls from './ArticlesPageFilter.module.scss'

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
