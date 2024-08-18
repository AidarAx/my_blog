import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleList } from 'entities/Article'
import { classNames } from 'shared/lib'
import { Text, TextSize, VStack } from 'shared/ui'
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'
import * as cls from './ArticleRecommendationsList.module.scss'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { isLoading, data: articles, error } = useArticleRecommendationsList(4)
  console.log(articles)

  return (
    <VStack className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Рекомендуем')}
      />
      <ArticleList
        className={cls.list}
        articles={articles}
        isLoading={isLoading}
        target={'_blank'}
      />
    </VStack>
  )
})
