import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    buttonName: "",
    name: "",
    description: "",
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setButtonName: (state, action) => {
      state.buttonName = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { setOpen, setButtonName, setName, setDescription } =
  modalSlice.actions;
