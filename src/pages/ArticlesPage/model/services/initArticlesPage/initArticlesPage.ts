import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { articlePageActions } from '../../slice/articlePageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'
import { getArticlePageInited } from '../../selectors/articlePageSelectors'

export const initArticlesPage = createAsyncThunk<
void,
void,
ThunkConfig<string>>(
  'articlePage/initArticlesPage',
  async (props, thunkAPI) => {
    const {
      dispatch,
      getState
    } = thunkAPI
    const inited = getArticlePageInited(getState())

    if (!inited) {
      dispatch(articlePageActions.initState())
      dispatch(fetchArticleList({
        page: 1
      }))
    }
  }
)
