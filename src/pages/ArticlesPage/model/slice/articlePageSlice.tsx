import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticlePageSchema } from 'pages/ArticlesPage'
import { Article, ArticleView } from 'entities/Article'
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/consts/localstorage'

const articlesAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage ?? articlesAdapter.getInitialState()
)

const articlePageSlice = createSlice({
  name: 'articlePage',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleView.SMALL,
    ids: [],
    entities: {}
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticleList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        articlesAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: articlePageReducers } = articlePageSlice
export const { actions: articlePageActions } = articlePageSlice
