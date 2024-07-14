import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Text.module.scss'
import { memo } from 'react'

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export enum TextSize {
  DEFAULT = 'default_size',
  LARGE = 'large_size'
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
  size?: TextSize
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.DEFAULT
  } = props

  return (
    <div className={classNames('', {}, [className, cls[theme], cls[align], cls[size]])}>
      {title && <p className={cls.title}>{ title }</p>}
      {text && <p className={cls.text}>{ text }</p>}
    </div>
  )
})
