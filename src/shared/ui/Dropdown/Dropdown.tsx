import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { memo, ReactNode } from 'react'
import { classNames } from 'shared/lib'
import { DropdownDirection } from 'shared/types'
import { AppLink, Button } from 'shared/ui'
import * as cls from './Dropdown.module.scss'

export interface DropdownItems {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItems[]
  trigger?: ReactNode
  direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top-left': cls.optionsTopLeft,
  'top-right': cls.optionsTopRight,
  'bottom-left': cls.optionsBottomLeft,
  'bottom-right': cls.optionsBottomRight
}

export const Dropdown = memo((props: DropdownProps) => {
  const { className, trigger, items, direction = 'bottom-right' } = props

  return (
    <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
      <MenuButton className={cls.btn}>
        <Button>
          {trigger}
        </Button>
      </MenuButton>
      <MenuItems className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}>
        {
          items.map((item, index) => {
            let content = (
              <button className={cls.item} onClick={item.onClick}>
                {item.content}
              </button>
            )

            if (item.href) {
              content = (
                <AppLink to={item.href} className={cls.item} onClick={item.onClick}>
                    {item.content}
                </AppLink>
              )
            }

            return (
              <MenuItem key={index} disabled={item.disabled}>
                {content}
              </MenuItem>
            )
          })
        }
      </MenuItems>
    </Menu>
  )
})
