import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

import * as cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage} className={cls.margin} theme={ButtonTheme.OUTLINE}>
        {t('Обновить страницу')}
      </Button>
    </div>
  )
})
