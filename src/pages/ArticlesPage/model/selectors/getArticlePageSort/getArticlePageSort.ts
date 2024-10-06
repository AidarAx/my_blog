import { StateSchema } from '@/app/providers/StoreProvider'
import { ArticleSortField } from '@/entities/Article'

export const getArticlePageSort = (state: StateSchema) => state.articlePage?.sort ?? ArticleSortField.CREATED
