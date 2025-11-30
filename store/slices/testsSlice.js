import { createSlice } from "@reduxjs/toolkit";
import tests from "@/data/tests.json";

const testSlice = createSlice({
  name: "tests",
  initialState: {
    allTests: tests,
  },
  reducers: {},
});

export default testSlice.reducer;
