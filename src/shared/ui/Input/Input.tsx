import React, { InputHTMLAttributes, memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    ...otherProps
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  const onFocus = () => {
    setIsFocused(true)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length || 0)
  }

  return (
      <div className={classNames(cls.inputWrapper, {}, [className])}>
        {placeholder && (
          <div className={cls.placeholder}>
            {`${placeholder}>`}
          </div>
        )}
        <div className={cls.caretWrapper}>
          <input
            className={cls.input}
            type={type}
            onChange={onChangeHandler}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            {...otherProps}
          />
          {isFocused && (
            <span
              className={cls.caret}
              style={{ left: `${caretPosition * 9.4}px` }}
            ></span>
          )}
        </div>
      </div>
  )
})
