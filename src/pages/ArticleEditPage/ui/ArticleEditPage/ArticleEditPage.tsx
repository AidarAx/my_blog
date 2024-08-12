import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import * as cls from './ArticleEditPage.module.scss'
import { memo } from 'react'
import { Page } from 'widgets/Page'
import { useParams } from 'react-router-dom'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit
        ? 'редактирование'
        : 'Создания'}
    </Page>
  )
}

export default memo(ArticleEditPage)
