import { fireEvent, screen } from '@testing-library/react'
import { RenderComponent } from 'shared/lib/tests/RenderCompanent/RenderComponent'
import { Counter } from 'entities/Counter'

describe('Counter', () => {
  test('test render', () => {
    RenderComponent(<Counter/>, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })

  test('increment', () => {
    RenderComponent(<Counter/>, {
      initialState: { counter: { value: 10 } }
    })
    fireEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })

  test('decrement', () => {
    RenderComponent(<Counter/>, {
      initialState: { counter: { value: 10 } }
    })
    fireEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
