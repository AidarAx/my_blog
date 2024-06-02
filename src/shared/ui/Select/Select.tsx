import { classNames, Mods } from 'shared/lib/classNames/classNames'
import * as cls from './Select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

export interface SelectOptions {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOptions[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly
  } = props

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
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
    onChange?.(e.target.value)
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
)
