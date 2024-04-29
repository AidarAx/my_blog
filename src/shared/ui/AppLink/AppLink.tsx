import { FC, PropsWithChildren } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import * as cls from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme: AppLinkTheme
}

export const AppLink: FC<AppLinkProps & PropsWithChildren> = (props) => {
  const {
    to,
    className,
    children,
    theme,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
