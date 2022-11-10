import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TaskModel from "../../../TaskModel";

const initialTasksState: TaskModel[] = [
  {
    id: 0,
    name: "Practicar react",
    description: "avanzar con la todo list",
  },
  {
    id: 1,
    name: "Practicar redux",
    description: "aplicarle redux toolkit a la todo list",
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    initialTasksState,
    currentTask: {
      id: undefined,
      name: "",
      description: "",
    },
  },
  reducers: {
    setTasks: (state, action: PayloadAction<TaskModel[]>) => {
      state.initialTasksState = action.payload;
    },
    setcurrentTask: (state, action) => {
      state.currentTask = action.payload;
    },
  },
});

export default tasksSlice.reducer;
export const { setTasks, setcurrentTask } = tasksSlice.actions;
