import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/RouteConfig/routeConfig'

import * as cls from './Sidebar.module.scss'

import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      data-testid={'sidebar'}
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button data-testid={'sidebar-toggle'}
              onClick={onToggle}
              className={cls.collapsedBtn}
              theme={ButtonTheme.BACKGROUND_INVERTED}
              size={ButtonSize.L}
              square>
        { collapsed ? '>' : '<' }
      </Button>
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.item}
        >
          <MainIcon className={cls.icon}/>
          {collapsed ? null : <span>{t('Главное')}</span>}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={cls.item}
        >
          <AboutIcon className={cls.icon}/>
          {collapsed ? null : <span>{t('О сайте')}</span>}
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher short={collapsed}/>
      </div>
    </div>
  )
}
