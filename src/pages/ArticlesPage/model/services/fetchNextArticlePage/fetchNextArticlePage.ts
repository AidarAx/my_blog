import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticlePageHasMore } from '../../selectors/getArticlePageHasMore/getArticlePageHasMore'
import { getArticlePageIsLoading } from '../../selectors/getArticlePageIsLoading/getArticlePageIsLoading'
import { getArticlePageNum } from '../../selectors/getArticlePageNum/getArticlePageNum'
import { articlePageActions } from '../../slice/articlePageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

export const fetchNextArticlePage = createAsyncThunk<
void,
void,
ThunkConfig<string>>(
  'articlePage/fetchNextArticlePage',
  async (props, thunkAPI) => {
    const {
      getState,
      dispatch
    } = thunkAPI

    const page = getArticlePageNum(getState())
    const hasMore = getArticlePageHasMore(getState())
    const isLoading = getArticlePageIsLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(articlePageActions.setPage(page + 1))
      dispatch(fetchArticleList({}))
    }
  }
)
