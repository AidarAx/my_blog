import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames, DynamicModuleLoader, ReducersList, useAppDispatch } from 'shared/lib'
import { Button, ButtonTheme, Input, Text, TextTheme } from 'shared/ui'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword /getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducers } from '../../model/slice/loginSlice'
import * as cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducers
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [onSuccess, dispatch, username, password])

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div
        className={classNames(cls.loginForm, {}, [className])}
      >
        <Text title={t('Форма авторизации')}/>
        {error && <Text text={error} theme={TextTheme.ERROR}/>}
        <Input
          autoFocus={true}
          type="text"
          className={cls.input}
          placeholder={t('Введите имя пользователя')}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('Введите пороль')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={cls.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
