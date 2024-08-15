import { HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from 'shared/lib'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import * as cls from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 12 : 4)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton view={view} key={index}/>
    ))
}

export const ArticleList = memo(
  (props: ArticleListProps) => {
    const {
      className,
      articles,
      view = ArticleView.SMALL,
      isLoading,
      target
    } = props

    const renderArticles = (article: Article) => (
      <ArticleListItem
        className={cls.card}
        article={article}
        view={view}
        key={article.id}
        target={target}
      />
    )

    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {
          articles.length > 0
            ? articles.map(renderArticles)
            : null
        }
        {isLoading && getSkeletons(view)}
      </div>
    )
  }
)
