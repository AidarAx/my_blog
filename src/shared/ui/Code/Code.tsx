import React, { ReactNode, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Code.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import CopyIcon from 'shared/assets/icons/copyIcon.svg'
import { Icon } from 'shared/ui/Icon/Icon'

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
