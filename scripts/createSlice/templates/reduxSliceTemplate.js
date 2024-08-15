const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => {
    const typeName = `${firstCharUpperCase(sliceName)}Schema`;

    return `import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ${typeName} } from '../types/${sliceName}Schema'

const initialState: ${typeName} = {
}

export const ${sliceName}Slice = createSlice({
  name: '${sliceName}',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {

    }
  }
})

export const { actions: ${sliceName}Actions } = ${sliceName}Slice
export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice`;
};
