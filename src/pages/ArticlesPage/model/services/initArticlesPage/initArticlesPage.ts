import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { ArticleSortField, ArticleType } from '@/entities/Article'
import { SortOrder } from '@/shared/types/sortOrder'
import { getArticlePageInited } from '../../selectors/getArticlePageInited/getArticlePageInited'
import { articlePageActions } from '../../slice/articlePageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

export const initArticlesPage = createAsyncThunk<
void,
URLSearchParams,
ThunkConfig<string>>(
  'articlePage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const {
      dispatch,
      getState
    } = thunkAPI
    const inited = getArticlePageInited(getState())

    if (!inited) {
      const orderFromUrl = searchParams.get('order') as SortOrder
      const sortFromUrl = searchParams.get('sort') as ArticleSortField
      const searchFromUrl = searchParams.get('search')
      const typeFromUrl = searchParams.get('type') as ArticleType

      if (orderFromUrl) {
        dispatch(articlePageActions.setOrder(orderFromUrl))
      }

      if (sortFromUrl) {
        dispatch(articlePageActions.setSort(sortFromUrl))
      }

      if (searchFromUrl) {
        dispatch(articlePageActions.setSearch(searchFromUrl))
      }

      if (typeFromUrl) {
        dispatch(articlePageActions.setType(typeFromUrl))
      }

      dispatch(articlePageActions.initState())
      dispatch(fetchArticleList({}))
    }
  }
)
