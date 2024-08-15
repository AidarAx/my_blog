import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { HStack } from 'shared/ui'
import { Loader } from 'shared/ui/Loader/Loader'
import * as cls from './PageLoader.module.scss'

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
