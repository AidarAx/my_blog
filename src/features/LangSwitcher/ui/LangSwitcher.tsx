import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

import * as cls from './LangSwitcher.module.scss'
import { memo } from 'react'

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
