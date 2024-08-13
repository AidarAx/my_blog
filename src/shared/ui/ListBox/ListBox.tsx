import { Field, Label, Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import * as cls from './ListBox.module.scss'
import { Button, ButtonTheme } from '../Button/Button'
import { classNames } from 'shared/lib'

type DropdownDirection = 'top' | 'bottom'

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  top: cls.optionsTop,
  bottom: cls.optionsBottom
}

export const ListBox = (props: ListBoxProps) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = 'bottom'
  } = props

  return (
   <Field className={className}>
     {label && <Label>{label}</Label>}
     <HListBox
       disabled={readonly}
       as={'div'}
       className={cls.ListBox}
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
}
