import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ScrollRestorationSchema } from '../types/ScrollRestorationSchema'

const initialState: ScrollRestorationSchema = {
  scroll: {}
}

export const scrollRestoration = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[payload.path] = payload.position
    }
  }
})

export const { actions: scrollRestorationActions } = scrollRestoration
export const { reducer: scrollRestorationReducers } = scrollRestoration
