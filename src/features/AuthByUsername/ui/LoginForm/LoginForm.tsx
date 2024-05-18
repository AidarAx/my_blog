import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import React from 'react'
import * as cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = (props: LoginFormProps) => {
  const { t } = useTranslation()

  const {
    className
  } = props

  return (
    <form
      className={classNames(cls.loginForm, {}, [className])}
    >
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите username')}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите пороль')}
      />
      <Button className={cls.loginBtn}>
        {t('Войти')}
      </Button>
    </form>
  )
}
