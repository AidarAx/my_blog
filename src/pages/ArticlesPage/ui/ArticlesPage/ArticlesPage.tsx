import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DynamicModuleLoader, ReducersList, useAppDispatch, useEffectOnce } from 'shared/lib'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlePageReducers } from '../../model/slice/articlePageSlice'
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlePage: articlePageReducers
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  useEffectOnce(() => {
    dispatch(initArticlesPage(searchParams))
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <ArticlesInfiniteList/>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
