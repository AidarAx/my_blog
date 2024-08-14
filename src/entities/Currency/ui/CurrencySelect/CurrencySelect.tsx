import React, { memo, useCallback } from 'react'
import { Currency } from '../../model/types/currency'
import { ListBox } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import * as cls from './CurrencySelect.module.scss'
import { classNames } from 'shared/lib'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
    <ListBox
      className={classNames(cls.CurrencySelect, {}, [className])}
      items={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      label={t('Валюта>')}
      direction={'top-right'}
    />
  )

  // return (
  //   <Select
  //     className={classNames('', {}, [className])}
  //     label={t('Валюта')}
  //     options={options}
  //     value={value}
  //     onChange={onChangeHandler}
  //     readonly={readonly}
  //   />
  // )
})
