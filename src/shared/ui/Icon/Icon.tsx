import React from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import * as cls from './Icon.module.scss'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  inverted?: boolean
}

export const Icon = (props: IconProps) => {
  const { className, Svg, inverted, ...otherProps } = props

  return (
    <Svg className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])}
         {...otherProps}
    />
  )
}
