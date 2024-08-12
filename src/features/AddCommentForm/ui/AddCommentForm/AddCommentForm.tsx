import { useTranslation } from 'react-i18next'
import { classNames, DynamicModuleLoader, ReducersList, useAppDispatch } from 'shared/lib'
import * as cls from './AddCommentForm.module.scss'
import { Input, Button, ButtonTheme } from 'shared/ui'
import { addCommentFormActions, addCommentFormReducers } from '../../model/slice/addCommentFormSlice'
import { useSelector } from 'react-redux'
import { getCommentFormError, getCommentFormText } from '../../model/selectors/AddCommentFormSelectors'
import { memo, useCallback } from 'react'

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
