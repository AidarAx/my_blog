import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react'
import React, { Fragment, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '../../../../lib/classNames/classNames'
import { DropdownDirection } from '../../../../types/ui'
import { mapDirectionClass } from '../../styles/consts'
import * as popupCls from '../../styles/popup.module.scss'
import * as cls from './Popover.module.scss'

interface PopoverProps {
  className?: string
  trigger?: ReactNode
  direction?: DropdownDirection
  children: ReactNode
}

export const Popover = (props: PopoverProps) => {
  const { className, trigger, direction = 'bottom-right', children } = props
  const { t } = useTranslation()

  return (
    <HPopover className={classNames('', {}, [className, popupCls.popup])}>
      <PopoverButton as={Fragment}>
        {trigger}
      </PopoverButton>
      <PopoverPanel className={classNames(cls.panel, {}, [mapDirectionClass[direction]])}>
        {children}
      </PopoverPanel>
    </HPopover>
  )
}
