import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
  text: undefined,
  error: undefined
}

export const addCommentFormSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  }
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducers } = addCommentFormSlice
