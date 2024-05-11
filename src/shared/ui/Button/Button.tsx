import { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import * as cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
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
}

export const Button: FC<PropsWithChildren & ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props

  return (
    <button
      type={'button'}
      className={classNames(
        cls.button,
        { [cls.square]: square },
        [className, cls[theme], cls[size]]
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}
