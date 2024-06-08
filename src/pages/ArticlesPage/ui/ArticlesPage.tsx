import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import * as cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticlesPageProps> = ({ className }) => {
  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      ArticlePage
    </div>
  )
}

export default memo(ArticleDetailsPage)
