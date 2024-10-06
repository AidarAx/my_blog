import React from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import * as cls from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  inverted?: boolean
}

export const Icon = ({ className, Svg, inverted }: IconProps) => {
  return (
    <Svg className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])}></Svg>
  )
}
