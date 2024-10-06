import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticleDetailsData } from '@/entities/Article'
import { Comment } from '@/entities/Comment'
import { getUserAuthData } from '@/entities/User'
import {
  fetchCommentsByArticleId
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      getState,
      dispatch
    } = thunkAPI

    const userData = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) {
      return rejectWithValue('No data')
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text
      })

      if (!response.data) {
        throw new Error()
      }

      dispatch(fetchCommentsByArticleId(article.id))

      return response.data
    } catch (err) {
      console.log(err)

      return rejectWithValue('error')
    }
  }
)
