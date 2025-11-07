import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCourses = createAsyncThunk('courses/fetch', async () => {
  const res = await axios.get('/api/courses')
  return res.data
})

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    addCourseLocal: (state, action) => {
      state.items.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => { state.status = 'loading' })
      .addCase(fetchCourses.fulfilled, (state, action) => { state.status = 'succeeded'; state.items = action.payload })
      .addCase(fetchCourses.rejected, (state, action) => { state.status = 'failed'; state.error = action.error.message })
  }
})

export const { addCourseLocal } = coursesSlice.actions
export default coursesSlice.reducer
