import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit'
import { ProfileSchema } from 'entities/Profile'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage'
import { AddCommentFormSchema } from 'features/AddCommentForm'
import { ArticlePageSchema } from 'pages/ArticlesPage'
import { ScrollRestorationSchema } from 'features/ScrollRestoration'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  scrollRestoration: ScrollRestorationSchema

  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
  addCommentForm?: AddCommentFormSchema
  articlePage?: ArticlePageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: UnknownAction) => StateSchema
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
