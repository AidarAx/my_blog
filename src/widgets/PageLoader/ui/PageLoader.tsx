import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'
import * as cls from './PageLoader.module.scss'
import { memo } from 'react'
import { HStack } from 'shared/ui'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return (
      <HStack justify={'center'} align={'center'} className={classNames(cls.PageLoader, {}, [className])}>
        <Loader/>
      </HStack>
  )
}
)
