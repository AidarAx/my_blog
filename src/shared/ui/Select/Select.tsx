import { classNames, Mods } from 'shared/lib/classNames/classNames'
import * as cls from './Select.module.scss'
import { ChangeEvent, useMemo } from 'react'

export interface SelectOptions<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: Array<SelectOptions<T>>
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly
  } = props

  const optionsList = useMemo(() => {
    return options?.map((opt: SelectOptions<T>) => (
      <option
        value={opt.value}
        className={cls.option}
        key={opt.value}
      >
        {opt.content}
      </option>
    ))
  }, [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }

  const mods: Mods = {}

  return (
      <div className={classNames(cls.wrapper, mods, [className])}>
        {label && (
          <span>{label + '>'}</span>
        )}
        <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
          {optionsList}
        </select>
      </div>
  )
}
