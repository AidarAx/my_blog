import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { counterReducers } from 'entities/Counter'

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducers
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
