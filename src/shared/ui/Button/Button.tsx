import { FC, PropsWithChildren, ButtonHTMLAttributes, memo, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import * as cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props

  return (
    <button
      type={'button'}
      className={classNames(
        cls.button,
        { [cls.square]: square, [cls.disabled]: disabled },
        [className, cls[theme], cls[size]]
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
})
