import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleType } from '@/entities/Article'
import { classNames } from '@/shared/lib/'
import { TabItem, Tabs } from '@/shared/ui'

interface ArticleTypeTabsProps {
  className?: string
  value: string
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props
  const { t } = useTranslation()

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все')
    },
    {
      value: ArticleType.IT,
      content: t('Айти')
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика')
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука')
    }
  ], [t])

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType])

  return (
    <Tabs
      value={value}
      tabs={typeTabs}
      onTabClick={onTabClick}
      className={classNames('', {}, [className])}
    />
  )
}
