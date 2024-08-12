import { classNames } from 'shared/lib'
import * as cls from './ArticleListItem.module.scss'
import { ArticleView } from 'entities/Article'
import { Card, Skeleton } from 'shared/ui'

interface ArticleListItemSkeletonProps {
  className?: string
  view?: ArticleView
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const {
    className,
    view = ArticleView.SMALL
  } = props

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border={'50%'}/>
            <Skeleton width={150} height={16} className={cls.username}/>
            <Skeleton width={150} height={16} className={cls.date}/>
          </div>
          <Skeleton width={250} height={24} className={cls.title}/>
          <Skeleton height={200} className={cls.img}/>
          <div className={cls.footer}>
            <Skeleton width={200} height={36}/>
          </div>
        </Card>
      </div>)
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.img}/>
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16}/>
        </div>
        <Skeleton width={130} height={16} className={cls.title}/>
      </Card>
    </div>
  )
}
