import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const Icon = ({ className, Svg }: IconProps) => {
  return (
    <Svg className={classNames(cls.icon, {}, [className])}></Svg>
  )
}
