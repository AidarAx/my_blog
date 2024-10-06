import React, { ReactNode, useCallback } from 'react'
import CopyIcon from '@/shared/assets/icons/copyIcon.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'
import * as cls from './Code.module.scss'

interface CodeProps {
  className?: string
  children?: ReactNode
}

export const Code = (props: CodeProps) => {
  const { className, children } = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(String(children))
  }, [])

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button onClick={onCopy} className={cls.btn}>
        <CopyIcon className={cls.copyIcon}/>
      </Button>
      <code>
        {children}
      </code>
    </pre>
  )
}
