import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleDetailsCommentsSchema, ArticleDetailsPageRecommendationsSchema } from '@/pages/ArticleDetailsPage'
import { ArticlePageSchema } from '@/pages/ArticlesPage'
import { AddCommentFormSchema } from '@/features/addCommentForm'
import { LoginSchema } from '@/features/authByUsername'
import { EditableProfileCardSchema } from '@/features/editableProfileCard'
import { ScrollRestorationSchema } from '@/features/scrollRestoration'
import { ArticleDetailsSchema } from '@/entities/Article'
import { CounterSchema } from '@/entities/Counter'
import { UserSchema } from '@/entities/User'
import { rtkApi } from '@/shared/api'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  scrollRestoration: ScrollRestorationSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // async reducers
  loginForm?: LoginSchema
  profile?: EditableProfileCardSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
  articleDetailsRecommendations?: ArticleDetailsPageRecommendationsSchema
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
