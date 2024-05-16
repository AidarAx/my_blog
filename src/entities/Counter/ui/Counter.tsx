import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid={'value-title'} >value = {counterValue}</h1>
      <Button
        onClick={increment}
        theme={ButtonTheme.OUTLINE}
        data-testid={'increment-btn'}
      >
        increment
      </Button>
      <Button
        onClick={decrement}
        theme={ButtonTheme.OUTLINE}
        data-testid={'decrement-btn'}
      >
        decrement
      </Button>
    </div>
  )
}
