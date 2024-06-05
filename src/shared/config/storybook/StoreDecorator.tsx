import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducers } from 'features/AuthByUsername/model/slice/loginSlice'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducers } from 'entities/Profile'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducers,
  profile: profileReducers
}

export const StoreDecorator = (
  store?: Partial<StateSchema>,
  asyncReducers?: ReducersList) => (Story: StoryFn
) => {
  if (store) {
    return (
      <StoreProvider initialState={store} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story/>
      </StoreProvider>
    )
  }

  return (
    <StoreProvider>
      <Story/>
    </StoreProvider>
  )
}
