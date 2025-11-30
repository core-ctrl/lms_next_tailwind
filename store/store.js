import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import courseReducer from "./slices/courseSlice";
import uiReducer from "./slices/uiSlice";
import testReducer from "./slices/testSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: courseReducer,
    ui: uiReducer,
    tests: testReducer,
  },
});

export default store;
