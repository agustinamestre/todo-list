import { configureStore } from "@reduxjs/toolkit";
import tasks from "./slices/tasks/tasksSlice";
import modal from "./slices/modal/modal";

export const store = configureStore({
  reducer: {
    tasks,
    modal,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
