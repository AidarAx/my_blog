import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'

import * as cls from './PageLoader.module.scss'
import { memo } from 'react'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return (
      <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader/>
      </div>
  )
}
)
