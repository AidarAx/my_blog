import { lazy, Suspense } from 'react'
import { ArticleRatingProps } from './ArticleRating'

const ArticleRatingLazy = lazy(async () => await import('./ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense fallback={'loading...'}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  )
}
