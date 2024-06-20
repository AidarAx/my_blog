import { EntityState } from '@reduxjs/toolkit'
import { Article, ArticleView } from 'entities/Article'

export interface ArticlePageSchema extends EntityState<Article, string> {
  isLoading?: boolean
  error?: string

  view: ArticleView
}
