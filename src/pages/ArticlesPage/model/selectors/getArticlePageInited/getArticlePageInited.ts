import { StateSchema } from '@/app/providers/StoreProvider'
export const getArticlePageInited = (state: StateSchema) => state.articlePage?._inited
