import { classNames } from 'shared/lib'
import { Select, SelectOptions } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { ArticleSortField } from 'entities/Article'
import { SortOrder } from 'shared/types/sortOrder'
import * as cls from './ArtilceSortSelector.module.scss'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort
  } = props
  const { t } = useTranslation()

  const orderOptions = useMemo<Array<SelectOptions<SortOrder>>>(() => [
    {
      value: 'asc',
      content: t('возростанию')
    },
    {
      value: 'desc',
      content: t('убыванию')
    }
  ], [t])

  const sortFieldOptions = useMemo<Array<SelectOptions<ArticleSortField>>>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате создания')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('просмотрам')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию')
    }
  ], [t])

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('Сортировать')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('По')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  )
})
