import React, { memo } from 'react'
import { classNames } from 'shared/lib'
import * as cls from './Overlay.module.scss'

interface OverlayProps {
  className?: string
  onClick?: () => void
}

export const Overlay = memo(({ className, onClick }: OverlayProps) => {
  return (
      <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])}/>
  )
}
)
