import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib'
import { Button, ButtonTheme, VStack } from '@/shared/ui'
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
    <VStack justify={'center'} align={'center'} className={classNames(cls.pageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage} className={cls.margin} theme={ButtonTheme.OUTLINE}>
        {t('Обновить страницу')}
      </Button>
    </VStack>
  )
})
