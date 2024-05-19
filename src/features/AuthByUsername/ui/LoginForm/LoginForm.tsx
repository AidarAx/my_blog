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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form
      className={classNames(cls.loginForm, {}, [className])}
      onSubmit={onSubmit}
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
      <Button className={cls.loginBtn} type='submit'>
        {t('Войти')}
      </Button>
    </form>
  )
}
