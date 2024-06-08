import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import * as cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  return (
    <div className={classNames(cls.articleDetailsPage, {}, [])}>
      ArticleDetailsPage
    </div>
  )
}

export default memo(ArticleDetailsPage)
