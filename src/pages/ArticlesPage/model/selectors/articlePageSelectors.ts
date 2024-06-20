import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleView } from 'entities/Article'

export const getArticlePageIsLoading = (state: StateSchema) => state.articlePage?.isLoading ?? false
export const getArticlePageError = (state: StateSchema) => state.articlePage?.isLoading ?? ''
export const getArticlePageView = (state: StateSchema) => state.articlePage?.view ?? ArticleView.SMALL
