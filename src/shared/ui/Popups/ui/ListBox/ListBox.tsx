import { Field, Label, Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { Fragment, memo, ReactNode } from 'react'
import { classNames } from '../../../../lib'
import { DropdownDirection } from '../../../../types'
import { Button, ButtonTheme } from '../../../Button/Button'
import { mapDirectionClass } from '../../styles/consts'
import * as popupCls from '../../styles/popup.module.scss'
import * as cls from './ListBox.module.scss'

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  items?: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  readonly?: boolean
  label?: string
  direction?: DropdownDirection
}

export const ListBox = memo((props: ListBoxProps) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = 'bottom-left'
  } = props

  return (
    <Field className={className}>
      {label && <Label>{label}</Label>}
      <HListBox
        disabled={readonly}
        as={'div'}
        className={classNames('', {}, [popupCls.popup])}
        value={value}
        onChange={onChange}
      >
        <ListboxButton as={Fragment}>
          <Button theme={ButtonTheme.OUTLINE}>
            {value ?? defaultValue}
          </Button>
        </ListboxButton>
        <ListboxOptions className={classNames(cls.options, {}, [mapDirectionClass[direction]])}>
          {items?.map((item) => (
            <ListboxOption
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              className={cls.item}
            >
              {item.content}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HListBox>
    </Field>
  )
})
