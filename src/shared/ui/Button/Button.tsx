import { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import * as cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  BORDER = 'border'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<PropsWithChildren & ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props

  return (
    <button
      type={'button'}
      className={classNames(
        cls.button,
        {},
        [className, cls[theme ?? ThemeButton.CLEAR]]
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}
