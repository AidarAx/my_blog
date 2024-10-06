import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { classNames } from '@/shared/lib'
import * as cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()

  return (
    <Page className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </Page>
  )
})
