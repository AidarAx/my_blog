import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'login/fetchProfileData',
  async (_, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI

    try {
      const response = await extra.api.get<Profile>('/profile')

      return response.data
    } catch (err) {
      console.log(err)
      return rejectWithValue('error')
    }
  }
)
