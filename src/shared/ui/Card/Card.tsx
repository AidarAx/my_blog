import { HTMLAttributes, ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import * as cls from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINE = 'outline'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  theme?: CardTheme
}

export const Card = (props: CardProps) => {
  const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props

  return (
    <div
      className={classNames(cls.Card, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
