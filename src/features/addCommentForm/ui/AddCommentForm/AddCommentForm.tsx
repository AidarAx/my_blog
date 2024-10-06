import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames, DynamicModuleLoader, ReducersList, useAppDispatch } from '@/shared/lib'
import { Input, Button, ButtonTheme } from '@/shared/ui'
import { getCommentFormError, getCommentFormText } from '../../model/selectors/AddCommentFormSelectors'
import { addCommentFormActions, addCommentFormReducers } from '../../model/slice/addCommentFormSlice'
import * as cls from './AddCommentForm.module.scss'

interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducers
}

const AddCommentForm = (props: AddCommentFormProps) => {
  const { className, onSendComment } = props
  const { t } = useTranslation()
  const text = useSelector(getCommentFormText)
  const error = useSelector(getCommentFormError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text ?? '')
    onCommentTextChange('')
  }, [onSendComment, onCommentTextChange, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          placeholder={t('Введите текст коментария')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>{t('Отправить')}</Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(AddCommentForm)
