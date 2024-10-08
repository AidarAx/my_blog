import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Comment } from '@/entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'article/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI

    if (!articleId) {
      return rejectWithValue('Error')
    }

    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
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
