import { createSlice } from "@reduxjs/toolkit";
import coursesData from "@/data/courses.json";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    allCourses: coursesData,
    enrolled: [],
  },
  reducers: {
    enrollCourse(state, action) {
      state.enrolled.push(action.payload);
    },
  },
});

export const { enrollCourse } = courseSlice.actions;
export default courseSlice.reducer;
