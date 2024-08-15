import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article, ArticleType } from 'entities/Article'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'
import {
  getArticlePageLimit,
  getArticlePageNum,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType
} from '../../selectors/articlePageSelectors'

interface fetchArticleListProps {
  replace?: boolean
}

export const fetchArticleList = createAsyncThunk<
Article[],
fetchArticleListProps,
ThunkConfig<string>>(
  'articlePage/fetchArticleList',
  async (_, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      getState
    } = thunkAPI

    const limit = getArticlePageLimit(getState())
    const sort = getArticlePageSort(getState())
    const order = getArticlePageOrder(getState())
    const search = getArticlePageSearch(getState())
    const page = getArticlePageNum(getState())
    const type = getArticlePageType(getState())

    try {
      addQueryParams({
        sort,
        order,
        search,
        type
      })

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type
        }
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (err) {
      console.log(err)

      return rejectWithValue('error')
    }
  }
)
