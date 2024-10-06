import { CSSProperties, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import * as cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  size?: number
  src?: string
  alt?: string
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    size,
    alt
  } = props

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100
    }
  }, [size])

  return (
    <img
      src={src}
      alt={alt}
      className={classNames(cls.avatar, {}, [className])}
      style={styles}
    />
  )
}
