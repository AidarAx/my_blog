import { Article } from '@/entities/Article'
import { rtkApi } from '@/shared/api'

const articleRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  })
})

export const useArticleRecommendationsList = articleRecommendationsApi.useGetArticleRecommendationsListQuery
