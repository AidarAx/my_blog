import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducers } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducers
}

export const StoreDecorator = (store?: Partial<StateSchema>, asyncReducers?: Partial<ReducersMapObject<StateSchema>>) => (Story: StoryFn) => {
  if (store) {
    return (
      <StoreProvider initialState={store} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story/>
      </StoreProvider>
    )
  }

  return (
    <StoreProvider>
      <Story/>
    </StoreProvider>
  )
}
