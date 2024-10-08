import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib'
import { Button, ButtonTheme } from '@/shared/ui'

import * as cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
        onClick={toggleLang}
        theme={ButtonTheme.CLEAR}
        className={classNames(cls.langSwitcher, {}, [className])}
      >
        {t(short ? 'Короткий язык' : 'Язык')}
      </Button>
  )
}
)
