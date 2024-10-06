import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Profile } from '@/entities/Profile'

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
  'login/fetchProfileData',
  async (profileId, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI

    if (!profileId) {
      return rejectWithValue('Error')
    }

    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`)

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
