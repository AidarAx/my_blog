import { memo, ReactNode, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './ArticleDetails.module.scss'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducers } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eyeIcon.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article'
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'

const reducers: ReducersList = {
  articleDetails: articleDetailsReducers
}

interface ArticleDetailsProps {
  className?: string
  id: string
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { t } = useTranslation('article-details')
  const { className, id } = props
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const data = useSelector(getArticleDetailsData)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [id, dispatch])

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent
          key={block.id}
          block={block}
          className={cls.block}
        />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent
          key={block.id}
          block={block}
          className={cls.block}
        />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      default:
        return null
    }
  }, [])

  let content: ReactNode

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
        <Skeleton className={cls.title} width={600} height={30} />
        <Skeleton className={cls.skeleton} width={400} height={30} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузки статьи')}
      />
    )
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar className={cls.avatar} src={data?.img} size={200}/>
        </div>
        <Text className={cls.title} size={TextSize.L} title={data?.title} text={data?.subtitle}/>
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon}/>
          <Text text={String(data?.views)}/>
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon}/>
          <Text text={String(data?.createdAt)}/>
        </div>
        {data?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
