import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../utils/taskSlice";
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
