import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { addCommentFormReducers } from 'features/AddCommentForm/model/slice/addCommentFormSlice'
import { loginReducers } from 'features/AuthByUsername/model/slice/loginSlice'
import { editableProfileCardReducers } from 'features/EditableProfileCard/model/slice/editableProfileCardSlice'
import { articleDetailsReducers } from 'entities/Article/model/slice/articleDetailsSlice'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducers,
  profile: editableProfileCardReducers,
  articleDetails: articleDetailsReducers,
  addCommentForm: addCommentFormReducers,
  articleDetailsComments: articleDetailsReducers
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
