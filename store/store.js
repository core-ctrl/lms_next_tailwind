import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from './slices/coursesSlice'
import testsReducer from './slices/testsSlice'

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    tests: testsReducer
  }
})
