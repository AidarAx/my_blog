import { StateSchema } from 'app/providers/StoreProvider'

export const getArticlePageLimit = (state: StateSchema) => state.articlePage?.limit ?? 9
