import { StateSchema } from 'app/providers/StoreProvider'

export const getArticlePageOrder = (state: StateSchema) => state.articlePage?.order ?? 'asc'
