import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './ArticleList.module.scss'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { memo } from 'react'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
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
      isLoading
    } = props
    const { t } = useTranslation()

    const renderArticles = (article: Article) => (
      <ArticleListItem
        className={cls.card}
        article={article}
        view={view}
        key={article.id}
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
