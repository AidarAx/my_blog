import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { scrollRestorationReducers } from 'features/ScrollRestoration'
import { counterReducers } from 'entities/Counter'
import { userReducers } from 'entities/User'
import { rtkApi } from 'shared/api'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'
import { StateSchema } from './StateSchema'

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducers,
    user: userReducers,
    scrollRestoration: scrollRestorationReducers,
    [rtkApi.reducerPath]: rtkApi.reducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api
        }
      }
    }).concat(rtkApi.middleware)
  })

  // @ts-expect-error: I'll fix it later
  store.reducerManager = reducerManager

  return store
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']
