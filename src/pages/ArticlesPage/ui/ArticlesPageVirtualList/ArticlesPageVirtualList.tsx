import { ItemContent, Virtuoso, VirtuosoGrid, VirtuosoProps } from 'react-virtuoso'
import { Article, ArticleView, ArticleListItem, ArticleListItemSkeleton } from 'entities/Article'
import { classNames } from 'shared/lib'
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter'
import * as cls from './ArticlesPageVirtualList.module.scss'

interface ArticlesPageVirtualListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  onLoadNextPart: () => void
}

const getSkeletons = (view: ArticleView) => {
  const skeletons = new Array(view === ArticleView.SMALL ? 12 : 4)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton
        view={view}
        key={index}
      />
    ))

  return view === ArticleView.BIG ? skeletons : <div className={cls.skeletons}>{skeletons}</div>
}

export const ArticlesPageVirtualList = (props: ArticlesPageVirtualListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.BIG,
    onLoadNextPart
  } = props

  const renderArticlesList: ItemContent<Article, any> = (index, data) => (
    <ArticleListItem
      className={cls.card}
      article={data}
      view={view}
      key={data.id}
    />
  )

  return (
    <div className={classNames(cls.ArticlesPageVirtualList, {}, [className, cls[view]])}>
      {view === ArticleView.BIG
        ? (
        <Virtuoso
          style={{ height: '100%' }}
          data={articles}
          context={{ isLoading, view }}
          endReached={onLoadNextPart}
          totalCount={articles.length}
          itemContent={renderArticlesList}
          components={{
            Header,
            Footer
          }}
        />
          )
        : (
          <VirtuosoGrid
            data={articles}
            context={{ isLoading, view }}
            endReached={onLoadNextPart}
            totalCount={articles.length}
            itemContent={renderArticlesList}
            listClassName={cls.itemsWrapper}
            components={{
              Header,
              Footer
            }}
          />
          )}
    </div>
  )
}

const Footer = (props: VirtuosoProps<Article, { isLoading: boolean | undefined, view: ArticleView }>) => {
  if (props.context?.isLoading) {
    return getSkeletons(props.context.view)
  }
}

const Header = () => (
  <ArticlesPageFilter className={cls.filters}/>
)
