import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading
