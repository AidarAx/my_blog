import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { ListBox } from 'shared/ui'
import { Country } from '../../model/types/country'
import * as cls from './CountrySelect.module.scss'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine }
]

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly
  } = props

  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <ListBox
      className={classNames(cls.CountrySelect, {}, [className])}
      items={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      label={t('Страна>')}
      direction={'top-right'}
    />
  )

  // return (
  //   <Select
  //     className={classNames('', {}, [className])}
  //     label={t('Страна')}
  //     options={options}
  //     value={value}
  //     onChange={onChangeHandler}
  //     readonly={readonly}
  //   />
  // )
})
