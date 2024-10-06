import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ItemContent, Virtuoso, VirtuosoGrid, VirtuosoProps } from 'react-virtuoso'
import { Article, ArticleView, ArticleListItem, ArticleListItemSkeleton } from '@/entities/Article'
import { classNames, useAppDispatch } from '@/shared/lib'
import { getArticlePageIsLoading } from '../../model/selectors/getArticlePageIsLoading/getArticlePageIsLoading'
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView'
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { getArticles } from '../../model/slice/articlePageSlice'
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter'
import * as cls from './ArticlesInfiniteList.module.scss'

interface ArticlesInfiniteListProps {
  className?: string
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

export const ArticlesInfiniteList = (props: ArticlesInfiniteListProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlePageIsLoading)
  const view = useSelector(getArticlePageView)

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage())
  }, [dispatch])

  const renderArticlesList: ItemContent<Article, any> = (index, data) => (
    <ArticleListItem
      className={cls.card}
      article={data}
      view={view}
      key={data.id}
    />
  )

  return (
    <div className={classNames(cls.ArticlesInfiniteList, {}, [className, cls[view]])}>
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
