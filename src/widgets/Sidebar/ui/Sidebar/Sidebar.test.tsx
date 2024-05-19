import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { RenderComponent } from 'shared/lib/tests/RenderCompanent/RenderComponent'

describe('Sidebar', () => {
  test('', () => {
    RenderComponent(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle', () => {
    RenderComponent(<Sidebar/>)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
