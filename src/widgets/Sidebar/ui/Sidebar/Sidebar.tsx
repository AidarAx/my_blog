import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { classNames } from '@/shared/lib'
import { Button, ButtonSize, ButtonTheme, HStack, VStack } from '@/shared/ui'
import { getSidebarItemList } from '../../model/selectors/sidebarItemList'
import * as cls from './Sidebar.module.scss'
import { SidebarItem } from './SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true)
  const sidebarItemList = useSelector(getSidebarItemList)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
      <menu
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
        <VStack gap={'16'} className={cls.items}>
          {sidebarItemList.map(item => (
            <SidebarItem
              item={item}
              collapsed={collapsed}
              key={item.path}
            />
          ))}
        </VStack>
        <HStack justify={'center'} gap={'16'} align={'center'} className={cls.switchers}>
          <ThemeSwitcher/>
          <LangSwitcher short={collapsed}/>
        </HStack>
      </menu>
  )
}
)
