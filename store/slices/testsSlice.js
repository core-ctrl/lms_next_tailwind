import { createSlice } from '@reduxjs/toolkit'

const testsSlice = createSlice({
  name: 'tests',
  initialState: {
    items: []
  },
  reducers: {
    setTests: (state, action) => { state.items = action.payload },
    addTest: (state, action) => { state.items.push(action.payload) }
  }
})

export const { setTests, addTest } = testsSlice.actions
export default testsSlice.reducer
