import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'login/updateProfileData',
  async (_, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      getState
    } = thunkAPI

    const formData = getProfileForm(getState())

    try {
      const response = await extra.api.put<Profile>('/profile', formData)

      return response.data
    } catch (err) {
      console.log(err)

      return rejectWithValue('error')
    }
  }
)
