import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Fragment, memo, ReactNode } from 'react'
import { classNames } from 'shared/lib'
import { DropdownDirection } from '../../../../types/ui'
import { AppLink } from '../../../AppLink/AppLink'
import { Button } from '../../../Button/Button'
import { mapDirectionClass } from '../../styles/consts'
import * as popupCls from '../../styles/popup.module.scss'
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

export const Dropdown = memo((props: DropdownProps) => {
  const { className, trigger, items, direction = 'bottom-right' } = props

  return (
    <Menu as={'div'} className={classNames('', {}, [className, popupCls.popup])}>
      <MenuButton as={Fragment}>
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
