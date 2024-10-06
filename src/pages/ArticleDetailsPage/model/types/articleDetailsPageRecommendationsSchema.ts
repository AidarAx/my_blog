import { EntityState } from '@reduxjs/toolkit'
import { Article } from '@/entities/Article'

export interface ArticleDetailsPageRecommendationsSchema extends EntityState<Article, string> {
  isLoading?: boolean
  error?: string
}
