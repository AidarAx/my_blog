import { screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { act } from 'react'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { Profile } from 'entities/Profile'
import { $api } from 'shared/api/api'
import { RenderComponent } from 'shared/lib/tests/RenderCompanent/RenderComponent'
import { editableProfileCardReducers } from '../../model/slice/editableProfileCardSlice'
import { EditableProfileCard } from './EditableProfileCard'

const profile: Profile = {
  id: '1',
  firstname: 'Aidar',
  lastname: 'Akhmetgaliev',
  age: 22,
  username: 'admin',
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Kazan'
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile
    },
    user: {
      authData: { id: '1', username: 'admin' }
    }
  },
  asyncReducers: {
    profile: editableProfileCardReducers
  }
}

describe('EditableProfileCard', () => {
  test('Readonly mode must switch', async () => {
    RenderComponent(<EditableProfileCard id={'1'}/>, options)

    await act(async () => {
      await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    })

    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
  })

  test('When canceling, the values should be reset to zero.', async () => {
    RenderComponent(<EditableProfileCard id={'1'}/>, options)

    await act(async () => {
      await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    })

    await act(async () => {
      await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))
    })

    await act(async () => {
      await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'))
    })

    await act(async () => {
      await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user')
    })

    await act(async () => {
      await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user')
    })

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user')
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('user')

    await act(async () => {
      await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))
    })

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Aidar')
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('Akhmetgaliev')
  })

  test('Errors should appear', async () => {
    RenderComponent(<EditableProfileCard id={'1'}/>, options)

    await act(async () => {
      await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    })

    await act(async () => {
      await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))
    })

    await act(async () => {
      await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
    })

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
  })

  test('If there are no validation errors, then a PUT request should go to the server', async () => {
    const mockPutReq = jest.spyOn($api, 'put')

    RenderComponent(<EditableProfileCard id={'1'}/>, options)

    await act(async () => {
      await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    })

    await act(async () => {
      await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user')
    })

    await act(async () => {
      await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
    })

    expect(mockPutReq).toHaveBeenCalled()
  })
})
