import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Text.module.scss'
import { memo } from 'react'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT
  } = props

  return (
    <div className={classNames('', {}, [className, cls[theme], cls[align]])}>
      {title && <p className={cls.title}>{ title }</p>}
      {text && <p className={cls.text}>{ text }</p>}
    </div>
  )
})
